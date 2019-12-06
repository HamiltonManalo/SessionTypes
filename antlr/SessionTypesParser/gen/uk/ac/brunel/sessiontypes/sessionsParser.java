// Generated from D:/coding projects/SessionTypes/antlr/SessionTypesParser/src/uk/ac/brunel/sessiontypes\sessions.g4 by ANTLR 4.7.2
package uk.ac.brunel.sessiontypes;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class sessionsParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, ORKW=2, TYPE=3, SEND=4, RCV=5, ID=6, CHAR=7, INT=8, LP=9, RP=10, 
		LB=11, RB=12, WS=13, END=14;
	public static final int
		RULE_protocol = 0, RULE_func = 1, RULE_messageType = 2, RULE_name = 3, 
		RULE_types = 4, RULE_continuation = 5;
	private static String[] makeRuleNames() {
		return new String[] {
			"protocol", "func", "messageType", "stateName", "types", "continuation"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "','", "'|'", null, "'!'", "'?'", null, null, null, "'('", "')'", 
			"'{'", "'}'", null, "'end'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, "ORKW", "TYPE", "SEND", "RCV", "ID", "CHAR", "INT", "LP", 
			"RP", "LB", "RB", "WS", "END"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "sessions.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public sessionsParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProtocolContext extends ParserRuleContext {
		public List<FuncContext> func() {
			return getRuleContexts(FuncContext.class);
		}
		public FuncContext func(int i) {
			return getRuleContext(FuncContext.class,i);
		}
		public List<TerminalNode> WS() { return getTokens(sessionsParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(sessionsParser.WS, i);
		}
		public ProtocolContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_protocol; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sessionsListener ) ((sessionsListener)listener).enterProtocol(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sessionsListener ) ((sessionsListener)listener).exitProtocol(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof sessionsVisitor ) return ((sessionsVisitor<? extends T>)visitor).visitProtocol(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ProtocolContext protocol() throws RecognitionException {
		ProtocolContext _localctx = new ProtocolContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_protocol);
		int _la;
		try {
			setState(26);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(18);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==ID) {
					{
					{
					setState(12);
					func();
					setState(13);
					match(WS);
					setState(14);
					func();
					}
					}
					setState(20);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(22); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(21);
					func();
					}
					}
					setState(24); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==ID );
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FuncContext extends ParserRuleContext {
		public NameContext name() {
			return getRuleContext(NameContext.class,0);
		}
		public MessageTypeContext messageType() {
			return getRuleContext(MessageTypeContext.class,0);
		}
		public List<TerminalNode> LP() { return getTokens(sessionsParser.LP); }
		public TerminalNode LP(int i) {
			return getToken(sessionsParser.LP, i);
		}
		public TypesContext types() {
			return getRuleContext(TypesContext.class,0);
		}
		public List<TerminalNode> RP() { return getTokens(sessionsParser.RP); }
		public TerminalNode RP(int i) {
			return getToken(sessionsParser.RP, i);
		}
		public ContinuationContext continuation() {
			return getRuleContext(ContinuationContext.class,0);
		}
		public FuncContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_func; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sessionsListener ) ((sessionsListener)listener).enterFunc(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sessionsListener ) ((sessionsListener)listener).exitFunc(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof sessionsVisitor ) return ((sessionsVisitor<? extends T>)visitor).visitFunc(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FuncContext func() throws RecognitionException {
		FuncContext _localctx = new FuncContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_func);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(28);
			name();
			setState(29);
			messageType();
			setState(30);
			match(LP);
			setState(31);
			types();
			setState(32);
			match(RP);
			setState(33);
			match(LP);
			setState(34);
			continuation();
			setState(35);
			match(RP);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MessageTypeContext extends ParserRuleContext {
		public List<TerminalNode> SEND() { return getTokens(sessionsParser.SEND); }
		public TerminalNode SEND(int i) {
			return getToken(sessionsParser.SEND, i);
		}
		public List<TerminalNode> RCV() { return getTokens(sessionsParser.RCV); }
		public TerminalNode RCV(int i) {
			return getToken(sessionsParser.RCV, i);
		}
		public MessageTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_messageType; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sessionsListener ) ((sessionsListener)listener).enterMessageType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sessionsListener ) ((sessionsListener)listener).exitMessageType(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof sessionsVisitor ) return ((sessionsVisitor<? extends T>)visitor).visitMessageType(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MessageTypeContext messageType() throws RecognitionException {
		MessageTypeContext _localctx = new MessageTypeContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_messageType);
		int _la;
		try {
			setState(49);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(40);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==SEND) {
					{
					{
					setState(37);
					match(SEND);
					}
					}
					setState(42);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(46);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==RCV) {
					{
					{
					setState(43);
					match(RCV);
					}
					}
					setState(48);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NameContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(sessionsParser.ID, 0); }
		public NameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_name; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sessionsListener ) ((sessionsListener)listener).enterName(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sessionsListener ) ((sessionsListener)listener).exitName(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof sessionsVisitor ) return ((sessionsVisitor<? extends T>)visitor).visitName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final NameContext name() throws RecognitionException {
		NameContext _localctx = new NameContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_name);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(51);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypesContext extends ParserRuleContext {
		public List<TerminalNode> TYPE() { return getTokens(sessionsParser.TYPE); }
		public TerminalNode TYPE(int i) {
			return getToken(sessionsParser.TYPE, i);
		}
		public TypesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_types; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sessionsListener ) ((sessionsListener)listener).enterTypes(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sessionsListener ) ((sessionsListener)listener).exitTypes(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof sessionsVisitor ) return ((sessionsVisitor<? extends T>)visitor).visitTypes(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TypesContext types() throws RecognitionException {
		TypesContext _localctx = new TypesContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_types);
		int _la;
		try {
			setState(62);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(53);
				match(TYPE);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(59);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==TYPE) {
					{
					{
					setState(54);
					match(TYPE);
					setState(55);
					match(T__0);
					setState(56);
					match(TYPE);
					}
					}
					setState(61);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ContinuationContext extends ParserRuleContext {
		public List<NameContext> name() {
			return getRuleContexts(NameContext.class);
		}
		public NameContext name(int i) {
			return getRuleContext(NameContext.class,i);
		}
		public List<TerminalNode> ORKW() { return getTokens(sessionsParser.ORKW); }
		public TerminalNode ORKW(int i) {
			return getToken(sessionsParser.ORKW, i);
		}
		public TerminalNode END() { return getToken(sessionsParser.END, 0); }
		public ContinuationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_continuation; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sessionsListener ) ((sessionsListener)listener).enterContinuation(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sessionsListener ) ((sessionsListener)listener).exitContinuation(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof sessionsVisitor ) return ((sessionsVisitor<? extends T>)visitor).visitContinuation(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ContinuationContext continuation() throws RecognitionException {
		ContinuationContext _localctx = new ContinuationContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_continuation);
		int _la;
		try {
			setState(75);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(64);
				name();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(71);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==ID) {
					{
					{
					setState(65);
					name();
					setState(66);
					match(ORKW);
					setState(67);
					name();
					}
					}
					setState(73);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(74);
				match(END);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\20P\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\3\2\3\2\3\2\3\2\7\2\23\n\2\f\2\16\2"+
		"\26\13\2\3\2\6\2\31\n\2\r\2\16\2\32\5\2\35\n\2\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\4\7\4)\n\4\f\4\16\4,\13\4\3\4\7\4/\n\4\f\4\16\4\62\13\4"+
		"\5\4\64\n\4\3\5\3\5\3\6\3\6\3\6\3\6\7\6<\n\6\f\6\16\6?\13\6\5\6A\n\6\3"+
		"\7\3\7\3\7\3\7\3\7\7\7H\n\7\f\7\16\7K\13\7\3\7\5\7N\n\7\3\7\2\2\b\2\4"+
		"\6\b\n\f\2\2\2T\2\34\3\2\2\2\4\36\3\2\2\2\6\63\3\2\2\2\b\65\3\2\2\2\n"+
		"@\3\2\2\2\fM\3\2\2\2\16\17\5\4\3\2\17\20\7\17\2\2\20\21\5\4\3\2\21\23"+
		"\3\2\2\2\22\16\3\2\2\2\23\26\3\2\2\2\24\22\3\2\2\2\24\25\3\2\2\2\25\35"+
		"\3\2\2\2\26\24\3\2\2\2\27\31\5\4\3\2\30\27\3\2\2\2\31\32\3\2\2\2\32\30"+
		"\3\2\2\2\32\33\3\2\2\2\33\35\3\2\2\2\34\24\3\2\2\2\34\30\3\2\2\2\35\3"+
		"\3\2\2\2\36\37\5\b\5\2\37 \5\6\4\2 !\7\13\2\2!\"\5\n\6\2\"#\7\f\2\2#$"+
		"\7\13\2\2$%\5\f\7\2%&\7\f\2\2&\5\3\2\2\2\')\7\6\2\2(\'\3\2\2\2),\3\2\2"+
		"\2*(\3\2\2\2*+\3\2\2\2+\64\3\2\2\2,*\3\2\2\2-/\7\7\2\2.-\3\2\2\2/\62\3"+
		"\2\2\2\60.\3\2\2\2\60\61\3\2\2\2\61\64\3\2\2\2\62\60\3\2\2\2\63*\3\2\2"+
		"\2\63\60\3\2\2\2\64\7\3\2\2\2\65\66\7\b\2\2\66\t\3\2\2\2\67A\7\5\2\28"+
		"9\7\5\2\29:\7\3\2\2:<\7\5\2\2;8\3\2\2\2<?\3\2\2\2=;\3\2\2\2=>\3\2\2\2"+
		">A\3\2\2\2?=\3\2\2\2@\67\3\2\2\2@=\3\2\2\2A\13\3\2\2\2BN\5\b\5\2CD\5\b"+
		"\5\2DE\7\4\2\2EF\5\b\5\2FH\3\2\2\2GC\3\2\2\2HK\3\2\2\2IG\3\2\2\2IJ\3\2"+
		"\2\2JN\3\2\2\2KI\3\2\2\2LN\7\20\2\2MB\3\2\2\2MI\3\2\2\2ML\3\2\2\2N\r\3"+
		"\2\2\2\f\24\32\34*\60\63=@IM";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}