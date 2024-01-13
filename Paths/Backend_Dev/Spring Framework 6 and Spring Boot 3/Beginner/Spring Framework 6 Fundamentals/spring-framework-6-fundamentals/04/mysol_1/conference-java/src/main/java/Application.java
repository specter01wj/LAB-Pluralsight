import com.jinwang.service.SpeakService;
import com.jinwang.service.SpeakServiceImpl;

public class Application {

    public static void main (String args []) {
        SpeakService service = new SpeakServiceImpl();

        System.out.println(service.findAll().get(0).getFirstName());
    }
}
