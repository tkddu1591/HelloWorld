package com.example.helloworld.controller.member;

import com.example.helloworld.service.member.EmailService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@Log4j2
@RestController
@CrossOrigin("http://localhost:3000")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @GetMapping("/api/reqeustEmail/{type}")
    public HashMap<String, String> sendEmail(@RequestParam String email,
                                             @PathVariable String type) {
        return emailService.reqeustEmail(email, type);
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