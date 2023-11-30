package com.example.helloworld.security;

import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

@Log4j2
public class SecurityUtils {
    private SecurityUtils() {};

    public static String getMyEmail() {
        final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        /*log.info("isLogin? : " + authentication.isAuthenticated());*/
        return authentication.getName();
    }
}
