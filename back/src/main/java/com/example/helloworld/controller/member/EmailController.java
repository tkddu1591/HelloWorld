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
    public String sendEmail(@RequestBody HashMap<String, String> data) {
        String email = data.get("email");
        log.info("email : " + email);
        log.info("controller 1");
        // 1. 이메일 중복 체크
        if(!emailService.isEmailUnique(email)) return "중복입니다.";

        log.info("controller 2");
        // 2. 결과에 따라 이메일 인증 전송
        if(emailService.sendEmail(email)) return "인증번호 입력하세요.";

        log.info("controller 3");
        return "다시 시도해주세요.";
    }

}
