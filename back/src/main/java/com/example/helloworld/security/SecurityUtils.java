package com.example.helloworld.security;

import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

@Log4j2
public class SecurityUtils {
    private SecurityUtils() {};

    public static String getMyEmail() {
        final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        log.info("isLogin? : " + authentication.isAuthenticated());

        if (authentication == null || !authentication.isAuthenticated()) {
            log.info("인증 안 됨");
            throw new RuntimeException("member is null");
        }

        String email = authentication.getName();
        log.info(" - email       : " + email);
        log.info(" - authro      : " + authentication.getAuthorities());
        log.info(" - principa;   : " + authentication.getPrincipal());
        log.info(" - details     : " + authentication.getDetails());
        log.info(" - credentials : " + authentication.getCredentials());
        log.info(" - class       : " + authentication.getClass());
        return email;
    }
}
