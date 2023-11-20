package com.example.helloworld.controller.member;


import com.example.helloworld.dto.member.MemberDTO;
import com.example.helloworld.service.member.MemberService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.UUID;

@Log4j2
@RestController
public class MemberController {

    @Autowired
    private MemberService memberService;

    @PostMapping("/member/signup")
    public boolean submitSignup(@RequestBody MemberDTO memberDTO, HttpServletRequest request) {
        // 회원 가입 후 바로 로그인 할 수 있게 할지?

        memberDTO.setUid(UUID.randomUUID().toString());
        memberDTO.setRegIp(request.getRemoteAddr());
        memberDTO.setRegDate(LocalDateTime.now());

        String email = memberDTO.getEmail();
        String pass1 = memberDTO.getPass();
        String pass2 = memberDTO.getPassChk();
        log.info(" - submitSignup > Email : " + email);
        log.info(" - submitSignup > pass1 : " + pass1);
        log.info(" - submitSignup > pass2 : " + pass2);

        if(pass1 == null || pass2 == null) return false;
        if(!pass1.equals(pass2)) return false;

        return memberService.signUp(memberDTO);
    }
}