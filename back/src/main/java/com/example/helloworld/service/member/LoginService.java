package com.example.helloworld.service.member;

import com.example.helloworld.dto.member.LoginDTO;
import com.example.helloworld.dto.member.MemberDTO;
import com.example.helloworld.dto.member.TokenDTO;
import com.example.helloworld.entity.member.TokenEntity;
import com.example.helloworld.jwt.JwtProvider;
import com.example.helloworld.repository.member.MemberRepository;
import com.example.helloworld.repository.member.TokenRepository;
import com.example.helloworld.security.MemberDetails;
import com.example.helloworld.transform.member.MemberTransform;
import com.example.helloworld.transform.member.TokenTransform;
import jakarta.servlet.http.Cookie;
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
    private final TokenService          tokenService;

    public Map<String, Object> defaultLogin(LoginDTO loginDTO) {
        log.info(" - defaultLogin > start!...");

        String email = loginDTO.getEmail();
        String pass = loginDTO.getPass();
        boolean isAutoLogin = loginDTO.isAutoLogin();
        log.info(" - defaultLogin > email       : " + email);
        log.info(" - defaultLogin > isAutoLogin : " + isAutoLogin);



        try {
            MemberDTO member = getMember(email, pass);
            member.setPass("YOU CANT'T SEE ME");
            log.info(" - defaultLogin > email : " + member.getEmail());

            int exp_refreshToken = jwtProvider.getRefreshToken_expMin();
            if(isAutoLogin) exp_refreshToken = 7*24*60;

            String accessToken  = jwtProvider.createToken(member, jwtProvider.getAccessToken_expMin());
            String refreshToken = jwtProvider.createToken(member, exp_refreshToken);
            String myInfo = member.getEmail()+","+member.getNick();

            if(tokenService.saveRefreshToken(email, refreshToken) != null) {
                log.info(" - defaultLogin > refreshToken SAVED!!!!");
            };

            return Map.of("grantType", "Bearer",
                          "accessToken", accessToken,
                          "refreshToken", refreshToken,
                          "myInfo", myInfo);

        } catch (Exception e) {
            return Map.of("grantType", "None",
                          "message", e.getMessage());
        }
    }
    public Cookie deleteCookie(String cookieName) {
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
    public LocalDateTime currentTime() {
        return LocalDateTime.now().atZone(ZoneId.of("Asia/Seoul")).toLocalDateTime();
    }

}