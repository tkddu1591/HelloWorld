package com.example.helloworld;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class HelloWorldApplication {

    public static void main(String[] args) {
        SpringApplication.run(HelloWorldApplication.class, args);
    }

   /* @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:3000",
                                "http://localhost:8080",
                                "http://52.78.236.129:8080",
                                "http://52.78.236.129:80",
                                "http://52.78.236.129",
                                "https://wonderful-genie-12322.netlify.app"
                        )
                        .allowedHeaders("*")
                        .allowedMethods("OPTIONS", "GET", "POST", "PUT", "DELETE");

                *//*.allowedHeaders("Authorization", "Content-Type");*//*

            }
        };
    }*/
}
