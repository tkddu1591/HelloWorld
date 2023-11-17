package com.example.helloworld.controller.member;

import com.example.helloworld.service.member.EmailService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Objects;

@Log4j2
@RestController
@CrossOrigin("http://localhost:3000")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @GetMapping("/api/sendEmail")
    public String sendEmail(@RequestParam String email) {
        log.info("email : " + email);
        // 1. 이메일 중복 체크
        if(!emailService.isEmailUnique(email)) return "이미 사용중인 이메일입니다.";

        // 2. 결과에 따라 이메일 인증 전송
        String result = emailService.sendAuthEmail(email);

        // 3. 결과 메시지 출력
        if(!result.equals("SUCCESS")) return result;
        return "인증번호를 확인해주세요.";
    }
}
