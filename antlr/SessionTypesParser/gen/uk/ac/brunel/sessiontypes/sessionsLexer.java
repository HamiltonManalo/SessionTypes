// Generated from D:/coding projects/SessionTypes/antlr/SessionTypesParser/src/uk/ac/brunel/sessiontypes\sessions.g4 by ANTLR 4.7.2
package uk.ac.brunel.sessiontypes;
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class sessionsLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, ORKW=2, TYPE=3, SEND=4, RCV=5, ID=6, CHAR=7, INT=8, LP=9, RP=10, 
		LB=11, RB=12, WS=13, END=14;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "ORKW", "TYPE", "SEND", "RCV", "ID", "CHAR", "INT", "LP", "RP", 
			"LB", "RB", "WS", "END"
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


	public sessionsLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "sessions.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\20[\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\3\2\3\2\3\3\3\3\3\4\3\4\3\4\3"+
		"\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4\63\n\4\3\5\3\5\3\6"+
		"\3\6\3\7\3\7\3\7\3\7\5\7=\n\7\3\b\6\b@\n\b\r\b\16\bA\3\t\6\tE\n\t\r\t"+
		"\16\tF\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r\3\16\6\16R\n\16\r\16\16\16S\3"+
		"\16\3\16\3\17\3\17\3\17\3\17\2\2\20\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n"+
		"\23\13\25\f\27\r\31\16\33\17\35\20\3\2\7\3\2c|\3\2C\\\4\2C\\c|\3\2\62"+
		";\5\2\13\f\17\17\"\"\2`\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2"+
		"\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25"+
		"\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\3\37\3\2"+
		"\2\2\5!\3\2\2\2\7\62\3\2\2\2\t\64\3\2\2\2\13\66\3\2\2\2\r<\3\2\2\2\17"+
		"?\3\2\2\2\21D\3\2\2\2\23H\3\2\2\2\25J\3\2\2\2\27L\3\2\2\2\31N\3\2\2\2"+
		"\33Q\3\2\2\2\35W\3\2\2\2\37 \7.\2\2 \4\3\2\2\2!\"\7~\2\2\"\6\3\2\2\2#"+
		"$\7p\2\2$%\7w\2\2%&\7o\2\2&\'\7d\2\2\'(\7g\2\2(\63\7t\2\2)*\7u\2\2*+\7"+
		"v\2\2+,\7t\2\2,-\7k\2\2-.\7p\2\2.\63\7i\2\2/\60\7c\2\2\60\61\7p\2\2\61"+
		"\63\7{\2\2\62#\3\2\2\2\62)\3\2\2\2\62/\3\2\2\2\63\b\3\2\2\2\64\65\7#\2"+
		"\2\65\n\3\2\2\2\66\67\7A\2\2\67\f\3\2\2\289\t\2\2\29=\5\17\b\2:;\t\3\2"+
		"\2;=\5\17\b\2<8\3\2\2\2<:\3\2\2\2=\16\3\2\2\2>@\t\4\2\2?>\3\2\2\2@A\3"+
		"\2\2\2A?\3\2\2\2AB\3\2\2\2B\20\3\2\2\2CE\t\5\2\2DC\3\2\2\2EF\3\2\2\2F"+
		"D\3\2\2\2FG\3\2\2\2G\22\3\2\2\2HI\7*\2\2I\24\3\2\2\2JK\7+\2\2K\26\3\2"+
		"\2\2LM\7}\2\2M\30\3\2\2\2NO\7\177\2\2O\32\3\2\2\2PR\t\6\2\2QP\3\2\2\2"+
		"RS\3\2\2\2SQ\3\2\2\2ST\3\2\2\2TU\3\2\2\2UV\b\16\2\2V\34\3\2\2\2WX\7g\2"+
		"\2XY\7p\2\2YZ\7f\2\2Z\36\3\2\2\2\b\2\62<AFS\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}