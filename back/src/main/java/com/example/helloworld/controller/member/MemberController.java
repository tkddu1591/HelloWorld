package com.example.helloworld.controller.member;


import com.example.helloworld.dto.member.MemberDTO;
import com.example.helloworld.service.member.MemberService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
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
        return memberService.signUp(memberDTO,request);
    }

    @PostMapping("/member/login")
    public MemberDTO login(@RequestBody String email, String pass) {
        memberService.defaultLogin(email, pass);

        return null;
    }
}