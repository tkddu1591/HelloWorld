package com.example.helloworld.controller.member;

import com.example.helloworld.dto.member.LoginDTO;
import com.example.helloworld.jwt.JwtProvider;
import com.example.helloworld.service.member.LoginService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@Log4j2
@RestController
@RequiredArgsConstructor
public class LoginController {
    private final LoginService loginService;

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody LoginDTO login, HttpServletResponse response) {
        return loginService.defaultLogin(login);
    }

    @PostMapping("/logoutCookie")
    public String logoutCookie(@RequestBody LoginDTO cookieName, HttpServletResponse response) {
        response.addCookie(loginService.deleteCookie(cookieName.getCookieName()));
        return "SUCCESS";
    }
}