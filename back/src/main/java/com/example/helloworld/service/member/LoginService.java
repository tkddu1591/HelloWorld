package com.example.helloworld.service.member;

import com.example.helloworld.dto.member.MemberDTO;
import com.example.helloworld.jwt.JwtProvider;
import com.example.helloworld.security.MemberDetails;
import com.example.helloworld.transform.member.MemberTransform;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import java.util.Map;

@Log4j2
@Service
@RequiredArgsConstructor
public class LoginService {

    private final AuthenticationManager authenticationManager;
    private final JwtProvider           jwtProvider;

    private final MemberTransform       memberTransform;

    public Map<String, Object> defaultLogin(String email, String pass) {
        log.info("default login");
        try {
            MemberDTO member = getMember(email, pass);
            member.setPass("YOU CANT'T SEE ME");

            String accessToken  = jwtProvider.createToken(member, 3);
            String refreshToken = jwtProvider.createToken(member, 10);

            return Map.of("grantType", "Bearer",
                          "accessToken", accessToken,
                          "refreshToken", refreshToken,
                          "member", member);

        } catch (Exception e) {
            return Map.of("grantType", "None",
                          "message", e.getMessage());
        }
    }

    public MemberDTO getMember(String unique, String pass) {
        UsernamePasswordAuthenticationToken authenticationToken
                = new UsernamePasswordAuthenticationToken(unique, pass);

        MemberDetails memberDetails = (MemberDetails) authenticationManager
                .authenticate(authenticationToken)
                .getPrincipal();

        return memberTransform.toDTO(memberDetails.getMemberEntity());
    }
}