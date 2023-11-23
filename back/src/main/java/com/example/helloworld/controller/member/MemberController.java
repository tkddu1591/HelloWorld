package com.example.helloworld.controller.member;


import com.example.helloworld.dto.member.MemberDTO;
import com.example.helloworld.service.member.MemberService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Log4j2
@RestController
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;

    @PostMapping("/member/signup")
    public boolean submitSignup(@RequestBody MemberDTO memberDTO, HttpServletRequest request) {
        return memberService.signUp(memberDTO, request);
    }
}