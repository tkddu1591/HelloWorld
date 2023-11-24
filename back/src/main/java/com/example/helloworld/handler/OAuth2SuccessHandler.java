package com.example.helloworld.handler;

import com.example.helloworld.jwt.JwtProvider;
import com.example.helloworld.security.MemberDetails;
import com.example.helloworld.transform.member.MemberTransform;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.IOException;

@Log4j2
@Component
@RequiredArgsConstructor
public class OAuth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private final JwtProvider jwtProvider;
    private final MemberTransform memberTransform;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        log.info(" - onAuthenticationSuccess > start!...");
        MemberDetails memberDeatails = (MemberDetails) authentication.getPrincipal();
        log.info(" - onAuthenticationSuccess > memberDetails.getAtt : " + memberDeatails.getAttributes());
        log.info(" - onAuthenticationSuccess > oauth2 인증 성공");

        String jwt_token = jwtProvider.createToken(
                memberTransform.toDTO(memberDeatails.getMemberEntity()),
                jwtProvider.accessToken_expMin);
        log.info(" - onAuthenticationSuccess > jwt_Token : " + jwt_token);

        String redirectUri = UriComponentsBuilder.fromUriString("/oauth2/login")
                .queryParam("accessToken", jwt_token).build().toUriString();
        log.info(" - onAuthenticationSuccess > redirectUri : " + redirectUri);
        log.info(" - onAuthenticationSuccess > end...");

        getRedirectStrategy().sendRedirect(request, response, redirectUri);
    }
}