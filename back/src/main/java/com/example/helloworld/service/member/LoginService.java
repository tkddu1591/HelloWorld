package com.example.helloworld.service.member;

import com.example.helloworld.dto.member.LoginDTO;
import com.example.helloworld.dto.member.MemberDTO;
import com.example.helloworld.jwt.JwtProvider;
import com.example.helloworld.security.MemberDetails;
import com.example.helloworld.transform.member.MemberTransform;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Map;

@Log4j2
@Service
@RequiredArgsConstructor
public class LoginService {

    private final AuthenticationManager authenticationManager;
    private final MemberTransform       memberTransform;
    private final JwtProvider           jwtProvider;

    public Map<String, Object> defaultLogin(String email, String pass, HttpServletResponse response) {
        log.info(" - defaultLogin > start!...");
        try {
            MemberDTO member = getMember(email, pass);
            member.setPass("YOU CANT'T SEE ME");
            log.info(" - defaultLogin > email : " + member.getEmail());

            String accessToken  = jwtProvider.createToken(member, 3);
            String refreshToken = jwtProvider.createToken(member, 10);
            String myInfo = getSimplyMember(member);

            response.addCookie(jwtProvider.createCookie("helloWorld_REFRESH_TOKEN", refreshToken, 30));
            return Map.of("grantType", "Bearer",
                          "accessToken", accessToken,
                          "myInfo", myInfo);

        } catch (Exception e) {
            return Map.of("grantType", "None",
                          "message", e.getMessage());
        }
    }
    public Cookie logoutCookie(String cookieName) {
        return jwtProvider.createCookie(cookieName, null, 0);
    }
    public MemberDTO getMember(String unique, String pass) {
        UsernamePasswordAuthenticationToken authenticationToken
                = new UsernamePasswordAuthenticationToken(unique, pass);

        MemberDetails memberDetails = (MemberDetails) authenticationManager
                .authenticate(authenticationToken)
                .getPrincipal();

        return memberTransform.toDTO(memberDetails.getMemberEntity());
    }
    public String getSimplyMember(MemberDTO memberDTO) {
        return memberDTO.getEmail()+","+memberDTO.getNick()+","+currentTime();
    }
    public LocalDateTime currentTime() {
        return LocalDateTime.now().atZone(ZoneId.of("Asia/Seoul")).toLocalDateTime();
    }
}