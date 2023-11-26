package com.example.helloworld.controller.member;

import com.example.helloworld.dto.member.LoginDTO;
import com.example.helloworld.jwt.JwtProvider;
import com.example.helloworld.service.member.LoginService;
/*import com.example.helloworld.service.member.OAuth2Service;*/
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
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

    @PostMapping("/login/social/{provider}")
    public Map<String, Object> social_login(@PathVariable String provider,
                                            @RequestBody LoginDTO login,
                                            HttpServletRequest request) {
        login.setRegip(request.getRemoteAddr());
        return loginService.socialLogin(login);
    }

    /*@PostMapping("/logoutCookie")
    public String logoutCookie(@RequestBody LoginDTO cookieName, HttpServletResponse response) {
        response.addCookie(loginService.deleteCookie(cookieName.getCookieName()));
        return "SUCCESS";
    }*/
    /*@GetMapping("/login/oauth2/token/{provider}")
    public Map<String, String> socialLogin(@PathVariable String provider) {
        log.info("return 왔어요");
        return null;
    }
    @GetMapping("/login/oauth2/code/{provider}")
    public void getOAuthCode(@PathVariable String provider, @RequestParam String code) {

    }*/
}