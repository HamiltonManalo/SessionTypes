import java.io.FileWriter;
import java.nio.file.FileSystems;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.Interval;

public class ExtractInterfaceListener extends JavaBaseListener {
    private JavaParser parser;
    private FileWriter out;

    public ExtractInterfaceListener(JavaParser parser, String writeTo) {
        this.parser = parser;
        try {
            out = new FileWriter(FileSystems.getDefault().getPath(writeTo).toString());
        } catch (Exception e) {
            System.out.println(e.toString());
        }
    }
	@Override public void enterCompilationUnit(JavaParser.CompilationUnitContext ctx) { 
        System.out.println(ctx.importDeclaration(0));
    }

    /** Listen to matches of classDeclaration */
    @Override
    public void enterClassDeclaration(JavaParser.ClassDeclarationContext ctx) {
        String value = "interface I" + ctx.Identifier() + " {";
        write(value);
    }

    @Override
    public void exitClassDeclaration(JavaParser.ClassDeclarationContext ctx) {
        write("}");
    }

    /** Listen to matches of methodDeclaration */
    @Override
    public void enterMethodDeclaration(JavaParser.MethodDeclarationContext ctx) {
        // need parser to get tokens
        TokenStream tokens = parser.getTokenStream();
        String type = "void";
        if (ctx.type() != null) {
            type = tokens.getText(ctx.type());
        }
        String args = tokens.getText(ctx.formalParameters());
        String value = "\t" + type + " " + ctx.Identifier() + args + ";";
        write(value);
    }

    private void write(String txt) {
        try {
            out.append(txt);
            out.append("\n\r");
            out.flush();
        } catch (Exception e) {
            System.out.println(e.toString());
        }
    }
    @Override 
    public void enterImportDeclaration(JavaParser.ImportDeclarationContext ctx) { 
        TokenStream tokens = parser.getTokenStream();
        write(tokens.getText(ctx));
    }
    
    public void close() {
        try {
            out.close();
        } catch (Exception e) {
            System.out.println(e.toString());
        }
    }
}