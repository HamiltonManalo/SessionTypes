// Generated from D:/coding projects/SessionTypes/antlr/SessionTypesParser/src/uk/ac/brunel/sessiontypes\sessions.g4 by ANTLR 4.7.2
package uk.ac.brunel.sessiontypes;
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link sessionsParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface sessionsVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link sessionsParser#protocol}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProtocol(sessionsParser.ProtocolContext ctx);
	/**
	 * Visit a parse tree produced by {@link sessionsParser#func}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunc(sessionsParser.FuncContext ctx);
	/**
	 * Visit a parse tree produced by {@link sessionsParser#messageType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMessageType(sessionsParser.MessageTypeContext ctx);
	/**
	 * Visit a parse tree produced by {@link sessionsParser#name}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitName(sessionsParser.NameContext ctx);
	/**
	 * Visit a parse tree produced by {@link sessionsParser#types}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypes(sessionsParser.TypesContext ctx);
	/**
	 * Visit a parse tree produced by {@link sessionsParser#continuation}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitContinuation(sessionsParser.ContinuationContext ctx);
}