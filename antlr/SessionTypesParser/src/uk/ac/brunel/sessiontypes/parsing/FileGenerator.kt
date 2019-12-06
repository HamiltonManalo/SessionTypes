package uk.ac.brunel.sessiontypes.parsing

import sun.plugin.dom.exception.InvalidStateException
import java.io.File
import java.nio.charset.Charset
import java.nio.file.FileSystems
import kotlin.reflect.KClass
import kotlin.reflect.KType
import kotlin.reflect.full.memberProperties

val typesFileName = "types.ts"
val stateMachineName = "CSFM.ts"

object generateTypes {

    fun generateTransitionType(model: Transition): String {
        return "interface transition "//This is just the type generation from property names. transitions must be built from values
    }

    fun generateTransitions(messages: List<ProtocolMessage>): MutableSet<Transition> {
        val end = Transition().apply {
            stateName = "END"
            messageType = MessageType.NONE
        }
        return messages.map { Transition().apply {
                stateName = it.name
                messageType = when(it.action) {
                    "?" -> MessageType.SEND
                    "!" -> MessageType.RECEIVE
                    else -> throw InvalidStateException("Invalid state received for message type SEND or RECEIVE | !/?")
                }
            }
        }.toMutableSet()
                .run {
                    add(end)
                    this
                }
    }

    fun generateStateNames(messages: List<ProtocolMessage>, listOfTransitions: MutableSet<Transition>): List<StateName> {
        return messages.map { message ->
            StateName()
                    .apply {
                        name = message.name
                        transitions = listOfTransitions.filter { message.transistions.contains(it.stateName) }
                        types = message.types.map {"\"$it\""}
                        messageType = when(message.action) {
                            "!" -> MessageType.SEND
                            "?" -> MessageType.RECEIVE
                            else -> throw InvalidStateException("Invalid state received for message type SEND or RECEIVE | !/? but received ${message.action}")
                        }
                    }
        }
    }
    fun buildTransitionType(transition: Transition) : String {
        val classVar = transition::class
        val builder = StringBuilder()
        builder.append("interface ${classVar.simpleName} {")
        classVar.memberProperties.forEach { builder.append("\r\n\t${it.name}: ${getSimpleType(it.getter.returnType)}")}
        builder.append("\r\n}")

        return builder.toString()
    }
    fun buildMessageTypeTypes(messageTypes: KClass<MessageType>) : String {
        val enumValueNames = enumValues<MessageType>()
        return "type MessageTypes = ${enumValueNames.map {"\t\"${it.name}\"\r\n"}.joinToString("|")}\r\n"
    }


    fun generate(messages: List<ProtocolMessage>) {
        val transitions = generateTransitions(messages)
        val stateNames = generateStateNames(messages, transitions)
        val builder = StringBuilder()
        //Build StateNames discriminated union
        builder.append("type StateName = \r\n\t  ${stateNames.map { "\"${it.name}\"" }.joinToString("\r\n\t| ")}")
        builder.append("\r\n let transitions = [")
        builder.append(transitions.joinToString(",\r\n\t", "\r\n\t"))
        builder.append("\r\n\t]")
        builder.append("\r\n")
        //Build message type enum
        builder.append(buildMessageTypeTypes(MessageType::class))
        builder.append("\r\n")

        //State objects
        val states = stateNames.map { "\r\n${it}" }.joinToString(",\r\n\t", "let states = [", "]")
        builder.append(states)
        val path = FileSystems.getDefault().getPath("output.ts").toAbsolutePath()

        val file = File("$path")
        val writer = file.writer(Charset.defaultCharset())
        writer.write(builder.toString())
        writer.flush()
        writer.close()
    }
    private fun getSimpleType(type: KType): String = type.toString()
            .split(".").last()
            .run {
                val arr = this.toCharArray()
                arr[0] = arr[0].toLowerCase()
                arr.joinToString("")
            }
}

fun String.quoted() = "\"$this\""