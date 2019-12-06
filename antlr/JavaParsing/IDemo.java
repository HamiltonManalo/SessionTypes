import java.util.List;
import static java.util.Map;
interface IDemo {
	void f(int x, String y);
	int[] g(/* no args */);
	List<Map<String, Integer>>[] h();
}
