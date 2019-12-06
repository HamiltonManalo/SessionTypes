// Generated from Add.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link AddParser}.
 */
public interface AddListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link AddParser#func}.
	 * @param ctx the parse tree
	 */
	void enterFunc(AddParser.FuncContext ctx);
	/**
	 * Exit a parse tree produced by {@link AddParser#func}.
	 * @param ctx the parse tree
	 */
	void exitFunc(AddParser.FuncContext ctx);
	/**
	 * Enter a parse tree produced by {@link AddParser#messageType}.
	 * @param ctx the parse tree
	 */
	void enterMessageType(AddParser.MessageTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link AddParser#messageType}.
	 * @param ctx the parse tree
	 */
	void exitMessageType(AddParser.MessageTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link AddParser#name}.
	 * @param ctx the parse tree
	 */
	void enterName(AddParser.NameContext ctx);
	/**
	 * Exit a parse tree produced by {@link AddParser#name}.
	 * @param ctx the parse tree
	 */
	void exitName(AddParser.NameContext ctx);
	/**
	 * Enter a parse tree produced by {@link AddParser#types}.
	 * @param ctx the parse tree
	 */
	void enterTypes(AddParser.TypesContext ctx);
	/**
	 * Exit a parse tree produced by {@link AddParser#types}.
	 * @param ctx the parse tree
	 */
	void exitTypes(AddParser.TypesContext ctx);
}