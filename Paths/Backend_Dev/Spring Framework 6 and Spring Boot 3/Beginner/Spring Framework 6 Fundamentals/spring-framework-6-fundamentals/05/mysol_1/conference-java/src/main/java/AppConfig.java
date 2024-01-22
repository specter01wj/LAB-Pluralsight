import com.jinwang.repository.SpeakerRepository;
import com.jinwang.repository.StubSpeakerRepositoryImpl;
import com.jinwang.service.SpeakService;
import com.jinwang.service.SpeakServiceImpl;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

@Configuration
public class AppConfig {


    @Bean(name="speakerService")
    @Scope(value = BeanDefinition.SCOPE_SINGLETON)
    public SpeakService getSpeakerService() {
        SpeakServiceImpl service = new SpeakServiceImpl(getSpeakerRepository());
//        service.setRepository(getSpeakerRepository());
        return service;
    }


    @Bean(name="speakerRepository")
    public SpeakerRepository getSpeakerRepository() {
        return new StubSpeakerRepositoryImpl();
    }


}
