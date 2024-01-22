import com.jinwang.service.SpeakService;
import com.jinwang.service.SpeakServiceImpl;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Application {

    public static void main (String args []) {
        ApplicationContext appContext = new AnnotationConfigApplicationContext(AppConfig.class);

        SpeakService service = appContext.getBean("speakerService", SpeakService.class);

        System.out.println(service);

        System.out.println(service.findAll().get(0).getFirstName());

        SpeakService service2 = appContext.getBean("speakerService", SpeakService.class);

        System.out.println(service2);
    }
}
