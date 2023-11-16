package com.example.helloworld.service.member;

import com.example.helloworld.repository.member.MemberRepository;
import jakarta.mail.*;
import jakarta.mail.internet.MimeMessage;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.spring6.SpringTemplateEngine;

import java.util.Properties;

@Log4j2
@RequiredArgsConstructor
@Service
public class EmailService {

    private final MemberRepository memberRepository;
    private final JavaMailSender javaMailSender;
    private final SpringTemplateEngine templateEngine;
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

    public char toAsciiCode(double num) {
        if(num < 10) return (char)(num+48);
        if(num > 35) return (char)(num+61);
        return (char)(num+55);
    }

    // 인증코드 생성하기
    public String createAuthCode() {
        String authCode = "";
        for(int i=0; i<8; i++) {
            authCode += toAsciiCode((Math.random()*62));
        }
        return authCode;
    }

    // 이메일 발송
    public boolean sendEmail(EmailData mail) {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        log.info("EmailData : " + mail.toString());

        try {
            log.info("sendEmail try...");
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, false, "UTF-8");
            mimeMessageHelper.setFrom("HelloWorld <tkddu1591@gmail.com>");
            mimeMessageHelper.setTo(mail.receiver);
            mimeMessageHelper.setSubject(mail.title);
            mimeMessageHelper.setText(mail.content, true);
            javaMailSender.send(mimeMessage);

        } catch (MessagingException e) {
            log.info("sendEmail catch...");
            throw new RuntimeException("이메일 전송 중 오류가 발생했습니다.", e);
        }
        log.info("sendEmail end...");
        return true;
    }

    // 이메일 인증용 메서드.
    public boolean sendAuthEmail(String emailReceiver) {
        String authCode = createAuthCode();
        EmailData mail = EmailData.builder()
                .title(EmailFormat.SIGNUP_TITLE.getMessage())
                .content(EmailFormat.SIGNUP_CONTENT.getMessage() + authCode + EmailFormat.CLOSE.getMessage())
                .receiver(emailReceiver)
                .build();

        return sendEmail(mail);
    }

    @ToString
    public enum EmailFormat {
        FINDPASS_TITLE("HelloWorld 비밀번호 변경을 위한 인증 메일입니다."),
        FINDPASS_CONTENT("<h1> 안녕하세요.</h1>" +
                "<h1> 개발자를 위한 플랫폼 HelloWorld 입니다.</h1>" +
                "<br>" +
                "<p> 아래 코드를 회원가입 창으로 돌아가 입력해주세요.</p>" +
                "<br>" +
                "<div align='center' style='border:1px solid black; font-family:verdana;'>" +
                "<h3 style='color:blue'> 회원가입 인증 코드 입니다. </h3>" +
                "<div style='font-size:130%'>"),
        SIGNUP_TITLE("HelloWorld 회원가입을 위한 인증 메일입니다."),
        SIGNUP_CONTENT("<h1> 안녕하세요.</h1>" +
                "<h1> 개발자를 위한 플랫폼 HelloWorld 입니다.</h1>" +
                "<br>" +
                "<p> 아래 코드를 비밀번호 변경 창으로 돌아가 입력해주세요.</p>" +
                "<br>" +
                "<div align='center' style='border:1px solid black; font-family:verdana;'>" +
                "<h3 style='color:blue'> 비밀번호 변경 인증 코드 입니다. </h3>" +
                "<div style='font-size:130%'>"),
        CLOSE("</div></div><br/>");

        private final String message;

        EmailFormat(String message) {
            this.message = message;
        }

        public String getMessage() {
            return message;
        }
    }

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