package com.example.helloworld.service.member;

import com.example.helloworld.repository.member.MemberRepository;
import jakarta.mail.*;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.security.SecureRandom;
import java.util.Properties;
import java.util.concurrent.ThreadLocalRandom;

@Log4j2
@Service
public class EmailService {

    @Autowired
    private MemberRepository memberRepository;

    @Value("${spring.mail.username}")
    private String emailSender;
    @Value("${spring.mail.password}")
    private String senderPassword;
    private static String randomCode;

    public boolean isEmailUnique(String email) {
        return memberRepository.countByEmail(email) == 0;
    }

    // Gmail SMTP 서버 설정
    public Properties initProperties() {
        log.info("logic 2");
        Properties properties = new Properties();
        properties.put("mail.smtp.host",       "smtp.gmail.com");
        properties.put("mail.smtp.port",       "465");
        properties.put("mail.smtp.auth",       "true");
        properties.put("mail.smtp.ssl.enable", "true");
        properties.put("mail.smtp.ssl.trust",  "true");
        return properties;
    }

    // Gmail SMTP Session 생성
    public Session initEmailSession(Properties properties) {
        log.info("logic 3");
        return Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(emailSender, senderPassword);
            }
        });
    }

    // 인증코드 생성하기
    public String createAuthenticationCode() {
        SecureRandom secureRandom = new SecureRandom();
        randomCode = "";
        for(int i=0; i<8; i++) {
            randomCode += secureRandom.nextInt(10);
        }
        return randomCode;
    }

    // 이메일 발송
    public boolean sendEmail(Message message, EmailData mail) {
        log.info("logic 5");
        log.info("EmailData : " + mail.toString());
        try {
            log.info("logic 5-1 start");
            message.setFrom(new InternetAddress(emailSender, mail.senderName, "UTF-8"));
            log.info("logic 5-1-1");
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(mail.receiver));
            log.info("logic 5-1-2");
            message.setSubject(mail.title);
            log.info("logic 5-1-3");
            message.setContent(mail.content, "text/html; charset=UTF-8");
            log.info("logic 5-1-4");
            Transport.send(message);
            //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
            ////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////
            // Could not connect to SMTP host: smtp.gmail.com, port: 465 에러 발생.
            ////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////


            log.info("logic 5-1-5");

        } catch (MessagingException e) {
            log.info("logic 5-2 fail");
            throw new RuntimeException("이메일 전송 중 오류가 발생했습니다.", e);

        } catch (UnsupportedEncodingException e) {
            log.info("logic 5-3 fail");
            throw new RuntimeException("문자 인코딩이 지원되지 않습니다.", e);
        }

        log.info("logic 5-4 success");
        return true;
    }

    // 이메일 인증용 메서드.
    public boolean sendEmail(String emailReceiver) {
        log.info("logic 1");
        Session emailSession = initEmailSession(initProperties());

        Message message = new MimeMessage(emailSession);

        String authCode = createAuthenticationCode();

        log.info("logic 1-1");
        EmailData mail = EmailData.builder()
                .sender(emailSender)
                .title("이메일 테스트입니다.")
                .content("이메일 테스트 내용 : " + authCode)
                .receiver(emailReceiver)
                .build();
        log.info("logic 1-2");
        boolean result = sendEmail(message, mail);
        log.info("logic 1-3");

        return result;
    }


    @ToString
    @Getter
    @Builder
    public static class EmailData {

        @Value("${spring.mail.username}")
        private String sender;
        @Builder.Default
        private String senderName = "HelloWorld";

        private String title;

        private String content;

        private String receiver;

    }
}

