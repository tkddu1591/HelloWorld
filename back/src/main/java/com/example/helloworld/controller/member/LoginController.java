package com.example.helloworld.controller.member;

import com.example.helloworld.dto.member.LoginDTO;
import com.example.helloworld.jwt.JwtProvider;
import com.example.helloworld.service.member.LoginService;
/*import com.example.helloworld.service.member.OAuth2Service;*/
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Log4j2
@RestController
@RequiredArgsConstructor
public class LoginController {
    private final LoginService loginService;
    /*private final OAuth2Service oAuth2Service;*/

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody LoginDTO login, HttpServletResponse response) {
        return loginService.defaultLogin(login);
    }

    @PostMapping("/logoutCookie")
    public String logoutCookie(@RequestBody LoginDTO cookieName, HttpServletResponse response) {
        response.addCookie(loginService.deleteCookie(cookieName.getCookieName()));
        return "SUCCESS";
    }

    // REST API로 부여하는
    // AccessToken 만료 시간 : 6시간 /
    // ID_Token : 6시간 /
    // RefreshToken : 2달, 만료 시간 1달 남은 시점부터 갱신 가능 /
    @GetMapping("/login/oauth2/token/{provider}")
    public Map<String, String> socialLogin(@PathVariable String provider) {
        log.info("return 왔어요");
        return null;
    }

    /*@PostMapping("/social/login/oauth/{provider}")
    public void socialLogin(@PathVariable String provider) {

    }*/
}