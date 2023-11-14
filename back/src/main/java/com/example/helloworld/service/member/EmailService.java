package com.example.helloworld.service.member;

import com.example.helloworld.repository.member.MemberRepository;
import jakarta.mail.Authenticator;
import jakarta.mail.PasswordAuthentication;
import jakarta.mail.Session;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Properties;

@Log4j2
@Service
public class EmailService {

    @Autowired
    private MemberRepository memberRepository;

    public boolean isEmailUnique(String email) {
        return memberRepository.countByEmail(email) == 0;
    }

    public void setProperties(Properties properties) {
        properties.put("mail.smtp.host",       "smtp.gmail.com");
        properties.put("mail.smtp.port",       "465");
        properties.put("mail.smtp.auth",       "true");
        properties.put("mail.smtp.ssl.enable", "true");
        properties.put("mail.smtp.ssl.trust",  "true");
    }

    public void sendEmail(String email) {
        Properties properties = new Properties();
        setProperties(properties);

        /*Session gmailSession = Session.getInstance(properties, new Authenticator(){
            @Override
            protected javax.mail.PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(email, appPass)
            }
        });*/


    }

}
