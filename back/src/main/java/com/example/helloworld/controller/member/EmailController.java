package com.example.helloworld.controller.member;

import com.example.helloworld.service.member.EmailService;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Log4j2
@RestController
@CrossOrigin("http://localhost:3000")
public class EmailController {

    private EmailService emailService;

    @PutMapping("/api/sendEmail/{email}")
    public String sendEmail(@RequestBody String email) {
        // 1. 이메일 중복 체크
        if(!emailService.isEmailUnique(email)) return "중복입니다.";

        /*emailService.sendEmail(email);*/
        // 2. 결과에 따라 이메일 인증 전송

        return null;
    }

}
