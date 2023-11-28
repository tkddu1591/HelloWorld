package com.example.helloworld.controller.member;

import com.example.helloworld.dto.member.EmailMessage;
import com.example.helloworld.service.member.EmailService;
import com.example.helloworld.utils.TempStorage;
import jakarta.mail.MessagingException;
import lombok.Getter;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSendException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@Log4j2
@RestController
@CrossOrigin("http://localhost:3000")
public class EmailController {

    @Autowired
    private EmailService emailService;
    /*private static final String MESSAGE_DUPLICATION = "이미 사용중인 이메일입니다.";
    private static final String MESSAGE_INVALID = "유효한 이메일 양식이 아닙니다.";
    private static final String MESSAGE_ERROR = "이메일 전송 오류. 이메일을 확인해주세요.";
    private static final String MESSAGE_SUCCESS = "인증번호를 확인해주세요.";*/

    @GetMapping("/api/reqeustEmail")
    public HashMap<String, String> sendEmail(@RequestParam String email,
                                             @RequestParam String type) {
        log.info(" - sendEmail > email : " + email);
        HashMap<String, String> result = new HashMap<>();
        // 1. 이메일 중복 체크 (uq일때 true)
        if (!emailService.isEmailUnique(email)) {
            result.put("message", EmailMessage.DUPLICATION.getMessage());
            return result;
        }
        // 2. 인증코드 이메일 전송
        return emailService.sendEmailCode(result, email);
    }

    @GetMapping("/api/responseEmail")
    public boolean receiveEmail(@RequestParam String email, String inputCode, String authCode) {
        log.info(" - responseEmail > email : " + email);
        log.info(" - responseEmail > inputCode : " + inputCode);
        log.info(" - responseEmail > authCode : " + authCode);
        if(inputCode == null) return false;
        return authCode.equals(inputCode);
    }
}