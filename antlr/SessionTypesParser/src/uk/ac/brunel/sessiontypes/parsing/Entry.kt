package uk.ac.brunel.sessiontypes.parsing



import org.antlr.v4.runtime.ANTLRInputStream
import org.antlr.v4.runtime.CharStream
import org.antlr.v4.runtime.CommonTokenStream
import org.antlr.v4.runtime.tree.ParseTreeWalker
import uk.ac.brunel.sessiontypes.sessionsBaseListener
import uk.ac.brunel.sessiontypes.sessionsBaseVisitor
import uk.ac.brunel.sessiontypes.sessionsLexer
import uk.ac.brunel.sessiontypes.sessionsParser
import java.io.FileInputStream
import java.nio.file.FileSystems

fun main(args: Array<String>) {
    val outputDir = FileSystems.getDefault().getPath("").toAbsolutePath().toString()
    val inputStream = if(args.isNotEmpty()) FileInputStream(args[0]) else System.`in`
    val outputfile = if(args.size > 1) args[1] else "default"

    val input = ANTLRInputStream(inputStream)
    val lexer = sessionsLexer(input as CharStream)
    val tokens = CommonTokenStream(lexer)
    val parser = sessionsParser(tokens)
    val tree = parser.protocol()
    val walker = ParseTreeWalker()
    val listener = Listener(parser)
    val visitor = Visitor()
    val messages = visitor.visit(tree) as List<ProtocolMessage>
    generateTypes.generate(messages)
//    walker.walk(listener, tree)
}

class Listener(private val parser: sessionsParser) : sessionsBaseListener() {
    override fun enterName(ctx: sessionsParser.NameContext?) {
    }
}

class Visitor : sessionsBaseVisitor<Any>() {

    override fun visitProtocol(ctx: sessionsParser.ProtocolContext?): Any {
        return ctx!!.func().map { buildProtocolMessage(it) }
    }
    private fun buildProtocolMessage(ctx: sessionsParser.FuncContext?): ProtocolMessage {
        return ProtocolMessage().apply {
            name = ctx!!.name().text
            transistions = ctx.continuation().name().map { it.text }
            types = ctx.types().TYPE().map { it.text }
            action = ctx!!.messageType().text
        }
    }
}
