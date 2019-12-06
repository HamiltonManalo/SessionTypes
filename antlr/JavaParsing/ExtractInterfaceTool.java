import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.*;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Arrays;
import java.util.stream.Collectors;

public class ExtractInterfaceTool {
    public static void main(String[] args) throws Exception {
        String inputFile = null;
        String outputFile = null; 
        if (args.length > 0) {
            inputFile = args[0];
            String modify = "I" + args[0];
            System.out.println("no null yet");
            outputFile = Arrays.stream(modify.split("\\.")).collect(Collectors.joining("."));
            System.out.println(outputFile);
        }
        if(args.length > 1) {
            outputFile = args[1]; 
        }
        InputStream is = System.in;
        if (inputFile != null)
            is = new FileInputStream(inputFile);
        ANTLRInputStream input = new ANTLRInputStream(is);
        JavaLexer lexer = new JavaLexer(input);
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        JavaParser parser = new JavaParser(tokens);
        ParseTree tree = parser.compilationUnit(); // parse

        ParseTreeWalker walker = new ParseTreeWalker(); // create standard walker
        ExtractInterfaceListener extractor = new ExtractInterfaceListener(parser, outputFile);
        walker.walk(extractor, tree); // initiate walk of tree with listener
        extractor.close();
    }
}