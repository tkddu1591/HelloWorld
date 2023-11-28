package com.example.helloworld.service.member;

import com.example.helloworld.controller.member.EmailController;
import com.example.helloworld.dto.member.EmailMessage;
import com.example.helloworld.repository.member.MemberRepository;
import jakarta.mail.*;
import jakarta.mail.internet.MimeMessage;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailSendException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

@Log4j2
@RequiredArgsConstructor
@Service
public class EmailService {

    private final MemberRepository memberRepository;
    private final JavaMailSender javaMailSender;

    public boolean isEmailUnique(String email) {
        return memberRepository.countByEmail(email) == 0;
    }

    // Gmail SMTP 서버 설정
    public Properties initProperties() {
        Properties properties = new Properties();
        properties.put("mail.smtp.host",       "smtp.gmail.com");
        properties.put("mail.smtp.port",       "465");
        properties.put("mail.smtp.auth",       "true");
        properties.put("mail.smtp.ssl.enable", "true");
        properties.put("mail.smtp.ssl.trust",  "true");
        return properties;
    }

    public char toAsciiCode(int num) {
        if(num < 10) return (char)(num+48);
        if(num > 35) return (char)(num+61);
        return (char)(num+55); // 10~ 35
    }

    public String createAuthCode() {
        String authCode = "";
        for(int i=0; i<8; i++) {
            authCode += toAsciiCode( (int) (Math.random()*62) );
        }
        return authCode;
    }

    // 이메일 발송
    public String sendEmail(EmailData mail) throws MessagingException {
        log.info(" - sendEmail > start...");
        log.info(" - sendEmail > EmailData : " + mail.toString());
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, false, "UTF-8");
        mimeMessageHelper.setFrom("HelloWorld <tkddu1591@gmail.com>");
        mimeMessageHelper.setTo(mail.receiver);
        mimeMessageHelper.setSubject(mail.title);
        mimeMessageHelper.setText(mail.content, true);
        javaMailSender.send(mimeMessage);

        log.info(" - sendEmail > end...");
        return mail.authCode;
    }

    // 이메일 인증용 메서드.
    public String sendAuthEmail(String emailReceiver) throws MessagingException {
        String authCode = createAuthCode();
        log.info(" - sendAuthEmail > authCode : " + authCode);


        EmailData mail = EmailData.builder()
                .title(EmailFormat.SIGNUP_TITLE.getMessage())
                .content(EmailFormat.SIGNUP_CONTENT.getMessage()
                        + authCode + EmailFormat.CLOSE.getMessage())
                .receiver(emailReceiver)
                .authCode(authCode)
                .build();

        return sendEmail(mail);
    }

    @Getter
    public enum TYPE {
        SIGN_UP(100),
        FIND_PASS(200);
        private final int type;
        TYPE(int type) {
            this.type = type;
        }
    }


    public HashMap<String, String> sendEmailCode(HashMap<String, String> result, String email) {
        String authCode;
        try {
            authCode = sendAuthEmail(email);
            log.info(" - sendEmail > try...authCode : " + authCode);
        } catch (MailSendException e) {
            log.error(" - sendEmail > catch...MailSendException : " + e.getMessage());
            result.put("message", EmailMessage.INVALID.getMessage());
            return result;

        } catch (MessagingException e) {
            log.error(" - sendEmail > catch...MessagingException : " + e.getMessage());
            result.put("message", EmailMessage.ERROR.getMessage());
            return result;
        }
        log.info(" - sendEmail > Success");
        result.put("message", EmailMessage.SUCCESS.getMessage());
        result.put("auth", authCode);
        return result;
    }

    @Getter
    @ToString
    public enum EmailFormat {
        SIGNUP_TITLE("HelloWorld 회원가입을 위한 인증 메일입니다."),
        SIGNUP_CONTENT("<h3> 안녕하세요.</h3>" +
                "<h3> 개발자를 위한 플랫폼 HelloWorld 입니다.</h3>" +
                "<br>" +
                "<p> 아래 코드를 회원가입 창으로 돌아가 입력해주세요.</p>" +
                "<br>" +
                "<div align='center' style='border:1px solid black; font-family:verdana; padding: 30px 0;'>" +
                "<h3 style='color:#0076ff'> 회원가입 인증 코드 입니다. </h3>" +
                "<div style='font-size:130%'>"),
        FINDPASS_TITLE("HelloWorld 비밀번호 변경을 위한 인증 메일입니다."),
        FINDPASS_CONTENT("<h3> 안녕하세요.</h3>" +
                "<h3> 개발자를 위한 플랫폼 HelloWorld 입니다.</h3>" +
                "<br>" +
                "<p> 아래 코드를 비밀번호 변경 창으로 돌아가 입력해주세요.</p>" +
                "<br>" +
                "<div align='center' style='border:1px solid black; font-family:verdana; padding: 30px 0;'>" +
                "<h3 style='color:#0076ff'> 비밀번호 변경 인증 코드 입니다. </h3>" +
                "<div style='font-size:130%'>"),
        CLOSE("</div></div><br/>");

        private final String message;

        EmailFormat(String message) {
            this.message = message;
        }
    }

    @Getter
    @ToString
    @Builder
    public static class EmailData {
        @Value("${spring.mail.username}")
        private String sender;
        @Builder.Default
        private String senderName = "HelloWorld";
        private String title;
        private String content;
        private String receiver;

        private String authCode;
    }
}