package com.example.helloworld.controller.member;


import com.example.helloworld.dto.member.MemberDTO;
import com.example.helloworld.service.member.LoginService;
import com.example.helloworld.service.member.MemberService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Log4j2
@RestController
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;
    private final LoginService  loginService;

    @PostMapping("/member/signup")
    public boolean submitSignup(@RequestBody MemberDTO memberDTO, HttpServletRequest request) {
        return memberService.signUp(memberDTO, request);
    }

    @GetMapping("/member/findMyEmail")
    public String findMyEmail(@RequestParam String name, @RequestParam String hp) {
        return memberService.findMyEmail(name, hp);
    }

    @PutMapping("/member/findMyPass")
    public boolean findMyPass(@RequestBody MemberDTO memberDTO) {
        return memberService.findMyPass(memberDTO);
    }

    @GetMapping("/me")
    public ResponseEntity<MemberDTO> getMyInfo() {
        /*log.info("start!");*/
        return ResponseEntity.ok().body(memberService.getMyInfo());
    }

    @PutMapping("/my/modify")
    public ResponseEntity<MemberDTO> modifyUserInfo(@RequestBody MemberDTO member) {
        return ResponseEntity.ok().body(memberService.modifyUserInfo(member));
    }

    @PutMapping("/my/modify/seller")
    public ResponseEntity<MemberDTO> modifySellerInfo(@RequestBody MemberDTO member) {
        return ResponseEntity.ok().body(memberService.modifySellerInfo(member));
    }

    @PutMapping("/apply/seller/{email}")
    public ResponseEntity<MemberDTO> applyForSellerType(@PathVariable String    email,
                                                        @RequestBody  MemberDTO member) {
        return ResponseEntity.ok().body(memberService.applyForSellerType(email, member.getType()));
    }

    @PutMapping("/my/delete/{email}")
    public ResponseEntity<MemberDTO> deleteAccount(@PathVariable String email) {
        return ResponseEntity.ok().body(memberService.deleteAccount(email));
    }

}