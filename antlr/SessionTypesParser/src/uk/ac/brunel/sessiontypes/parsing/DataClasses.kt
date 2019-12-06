package uk.ac.brunel.sessiontypes.parsing

import kotlin.reflect.full.memberProperties


enum class MessageType(val value: String) {
    SEND("SEND"),
    RECEIVE("RECEIVE"),
    NONE("END")
}
class ProtocolMessage {
    var name: String = ""
    var transistions: List<String> = listOf()
    var types: List<String> = listOf()
    var action = ""
}
class StateName {
    var name: String = ""
    var transitions: List<Transition> = listOf()
    var types: List<String> = listOf()
    var func: String = ""
    lateinit var messageType: MessageType
    override fun toString(): String {
        return "{\r\n\tstateName: \"$name\", \r\n\ttransitions:[${transitions.map {it.toString()}.joinToString(", ")}],\r\n\tfunc:\"$func\",\r\n\ttypes: [${types.joinToString(", ")}]\r\n}"

    }
}

class Transition {
    lateinit var messageType: MessageType
    var payload: String = ""
    var stateName: String = ""

    override fun toString(): String {

        return this::class.memberProperties.map { "{ ${it.name}: ${it.getter.call(this).toString().quoted()} }" }.joinToString(",")// "{messageType: \"$messageType\", payload: \"$payload\", stateName: \"$stateName\"}"
    }
    //create inline classes for string types
    //change type alias to interfaces
}
