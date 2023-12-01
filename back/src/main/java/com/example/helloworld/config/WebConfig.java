package com.example.helloworld.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000",
                        "http://localhost:8080",
                        "http://52.78.236.129:8080",
                        "http://52.78.236.129:80",
                        "http://52.78.236.129",
                        "https://wonderful-genie-12322.netlify.app",
                        "https://silver-dodol-a6f296.netlify.app/"
                )
                .allowedHeaders("*")
                .allowedMethods("OPTIONS", "GET", "POST", "PUT", "DELETE");
    }
/*    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("https://wonderful-genie-12322.netlify.app"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }*/
}
