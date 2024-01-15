import com.jinwang.service.SpeakService;
import com.jinwang.service.SpeakServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {


    @Bean(name="speakerService")
    public SpeakService getSpeakerService() {
        return new SpeakServiceImpl();
    }


}
