package com.example.helloworld.controller.member;

import com.example.helloworld.dto.member.LoginDTO;
import com.example.helloworld.service.member.LoginService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Map;

@Log4j2
@Controller
@RequiredArgsConstructor
public class LoginController {
    private final LoginService loginService;

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody LoginDTO login) {
        return loginService.defaultLogin(login.getEmail(), login.getPass());
    }
}