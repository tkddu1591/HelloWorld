package com.example.helloworld.jwt;

import com.example.helloworld.dto.member.MemberDTO;
import com.example.helloworld.service.member.TokenService;
import io.jsonwebtoken.Claims;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Log4j2
@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private final JwtProvider  jwtProvider;
    private final TokenService tokenService;
    public static final String AUTH_HEADER  = "Authorization";
    public static final String TOKEN_PREFIX = "Bearer";

    // HTTP 요청을 필터링 및 처리
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        /*log.info(" - doFilterInternal > START!...");*/
        String header = request.getHeader(AUTH_HEADER);
        String token = getTokenFromHeader(header);/*
        log.info(" - doFilterInternal > 1.1. header : " + header);
        log.info(" - doFilterInternal > 1.2. token : " + token);*/

        // token이 존재하고 유효한 경우.
        if(token != null) {
            /*log.info(" - doFilterInternal > 2.1. token is not null..");*/
            try {
                jwtProvider.validateToken(token); // 1차 토큰 검증
                if(getRequestPath(request).equals("/refreshToken")) { // /refreshToken path의 요청일 경우
                    String email = jwtProvider.getEmailFromToken(token);

                    if(!(token.trim()).
                            equals(tokenService.getToken(email).trim())) return; // 2차 토큰 검증

                    response.setStatus(HttpServletResponse.SC_CREATED);
                    response.getWriter().print(renewAccessToken(token)); // accessToken 재발급
                    log.info("re generate accessToken");
                    return;
                }

            } catch(JwtCustomException e) {
                log.error(e.error.getStatus());
                log.error(e.error.getMessage());
                e.sendResponseError(response);
                return;
            }

            /*log.info(" - doFilterInternal > 2.2.1");*/
            Authentication authentication = jwtProvider.getAuthentication(token);
            /*log.info(" - doFilterInternal > 2.2.2");*/
            SecurityContext securityContext = SecurityContextHolder.getContext();
            securityContext.setAuthentication(authentication);
        }
        filterChain.doFilter(request, response);
        /*log.info(" - doFilterInternal > END...");*/
    }

    public String getTokenFromHeader(String header) {
        /*log.info(" - getTokenFromHeader > START!...");*/
        // 접두어 Bearer 제거 후 토큰 값 반환
        if(header != null && header.startsWith(TOKEN_PREFIX)) {
            /*log.info(" - getTokenFromHeader > END...");*/
            return header.substring(TOKEN_PREFIX.length());
        }
        /*log.info(" - getTokenFromHeader > FAILED...");*/
        return null;
    }

    public String getRequestPath(HttpServletRequest request) {
        String uri = request.getRequestURI();
        return uri.substring(uri.lastIndexOf("/"));
    }

    public String renewAccessToken(String token) {
        Claims claims = jwtProvider.getClaims(token);
        String email = (String) claims.get("email");
        String nick = (String) claims.get("nick");
        Object type = claims.get("type");/*
        log.info(" - renewAccessToken > claims : " + claims);
        log.info(" - renewAccessToken > email : " + email);
        log.info(" - renewAccessToken > nick : " + nick);
        log.info(" - renewAccessToken > type : " + type);
*/
        MemberDTO member = MemberDTO.builder()
                .email(email)
                .nick(nick)
                .type((Integer) type)
                .build();
        return jwtProvider.createToken(member, jwtProvider.accessToken_expMin);
    }
}