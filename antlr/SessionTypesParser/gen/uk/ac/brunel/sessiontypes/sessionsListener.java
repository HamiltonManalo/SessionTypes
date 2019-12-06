// Generated from D:/coding projects/SessionTypes/antlr/SessionTypesParser/src/uk/ac/brunel/sessiontypes\sessions.g4 by ANTLR 4.7.2
package uk.ac.brunel.sessiontypes;
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link sessionsParser}.
 */
public interface sessionsListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link sessionsParser#protocol}.
	 * @param ctx the parse tree
	 */
	void enterProtocol(sessionsParser.ProtocolContext ctx);
	/**
	 * Exit a parse tree produced by {@link sessionsParser#protocol}.
	 * @param ctx the parse tree
	 */
	void exitProtocol(sessionsParser.ProtocolContext ctx);
	/**
	 * Enter a parse tree produced by {@link sessionsParser#func}.
	 * @param ctx the parse tree
	 */
	void enterFunc(sessionsParser.FuncContext ctx);
	/**
	 * Exit a parse tree produced by {@link sessionsParser#func}.
	 * @param ctx the parse tree
	 */
	void exitFunc(sessionsParser.FuncContext ctx);
	/**
	 * Enter a parse tree produced by {@link sessionsParser#messageType}.
	 * @param ctx the parse tree
	 */
	void enterMessageType(sessionsParser.MessageTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link sessionsParser#messageType}.
	 * @param ctx the parse tree
	 */
	void exitMessageType(sessionsParser.MessageTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link sessionsParser#name}.
	 * @param ctx the parse tree
	 */
	void enterName(sessionsParser.NameContext ctx);
	/**
	 * Exit a parse tree produced by {@link sessionsParser#name}.
	 * @param ctx the parse tree
	 */
	void exitName(sessionsParser.NameContext ctx);
	/**
	 * Enter a parse tree produced by {@link sessionsParser#types}.
	 * @param ctx the parse tree
	 */
	void enterTypes(sessionsParser.TypesContext ctx);
	/**
	 * Exit a parse tree produced by {@link sessionsParser#types}.
	 * @param ctx the parse tree
	 */
	void exitTypes(sessionsParser.TypesContext ctx);
	/**
	 * Enter a parse tree produced by {@link sessionsParser#continuation}.
	 * @param ctx the parse tree
	 */
	void enterContinuation(sessionsParser.ContinuationContext ctx);
	/**
	 * Exit a parse tree produced by {@link sessionsParser#continuation}.
	 * @param ctx the parse tree
	 */
	void exitContinuation(sessionsParser.ContinuationContext ctx);
}