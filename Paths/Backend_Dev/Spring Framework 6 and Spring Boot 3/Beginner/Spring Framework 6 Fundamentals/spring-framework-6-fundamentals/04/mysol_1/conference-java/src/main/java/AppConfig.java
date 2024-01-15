import com.jinwang.repository.SpeakerRepository;
import com.jinwang.repository.StubSpeakerRepositoryImpl;
import com.jinwang.service.SpeakService;
import com.jinwang.service.SpeakServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {


    @Bean(name="speakerService")
    public SpeakService getSpeakerService() {
        SpeakServiceImpl service = new SpeakServiceImpl();
        service.setRepository(getSpeakerRepository());
        return service;
    }


    @Bean(name="speakerRepository")
    public SpeakerRepository getSpeakerRepository() {
        return new StubSpeakerRepositoryImpl();
    }


}
