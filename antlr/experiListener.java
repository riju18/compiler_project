// Generated from experi.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link experiParser}.
 */
public interface experiListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link experiParser#start}.
	 * @param ctx the parse tree
	 */
	void enterStart(experiParser.StartContext ctx);
	/**
	 * Exit a parse tree produced by {@link experiParser#start}.
	 * @param ctx the parse tree
	 */
	void exitStart(experiParser.StartContext ctx);
	/**
	 * Enter a parse tree produced by {@link experiParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterExpr(experiParser.ExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link experiParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitExpr(experiParser.ExprContext ctx);
}