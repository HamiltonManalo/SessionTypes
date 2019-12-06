import java.io.FileWriter;
import java.io.IOException;
import java.util.List;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.Interval;
import org.antlr.v4.runtime.tree.*; 

public class AddParserListener extends AddBaseListener {
    private AddParser parser; 
    private FileWriter out; 
    public AddParserListener(AddParser aParser, String writeInfo) {
        try {
            parser = aParser; 
            out = new FileWriter(writeInfo); 
        } catch(IOException e) {
            System.out.println(e.toString());
        }
    }
    @Override
    public void enterFunc(AddParser.FuncContext ctx) {
        TokenStream tokens = parser.getTokenStream(); 
        write(tokens.getText(ctx));
    }

    @Override
    public void exitFunc(AddParser.FuncContext ctx) {

    }
    @Override 
    public void enterMessageType(AddParser.MessageTypeContext ctx) {
        // write();
        List<TerminalNode> nodes; 
        System.out.println(parser.getTokenStream().getText(ctx.getSourceInterval())); 
                // y.stream().forEach(x -> System.out.println(parser.getTokenStream().getText(x.getSourceInterval()) + "\r\n" + "typeArgs"));
     }
    private void write(String text) {
        try {
            out.append(text); 
            out.flush();
        } catch(IOException e) {
            System.out.println(e.toString());
        }
    }
}