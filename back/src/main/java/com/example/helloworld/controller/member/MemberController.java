package com.example.helloworld.controller.member;


import com.example.helloworld.dto.member.MemberDTO;
import com.example.helloworld.service.member.MemberService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Log4j2
@RestController
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;

    @PostMapping("/member/signup")
    public boolean submitSignup(@RequestBody MemberDTO memberDTO, HttpServletRequest request) {
        return memberService.signUp(memberDTO, request);
    }

    @GetMapping("/member/findMyEmail")
    public String findMyEmail(@RequestParam String name,
                              @RequestParam String hp) {
        log.info(" - findMyEmail > " + name + ", " + hp);
        String email = memberService.findMyEmail(name, hp);
        log.info(" - findMyEmail > email : " + email);
        return email;
    }

    @GetMapping("/me")
    public ResponseEntity<MemberDTO> getMyInfo() {
        log.info("start!");
        return ResponseEntity.ok().body(memberService.getMyInfo());
    }
}