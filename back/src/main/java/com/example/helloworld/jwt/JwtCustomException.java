package com.example.helloworld.jwt;

import java.io.IOException;
import org.springframework.http.MediaType;
import jakarta.servlet.http.HttpServletResponse;
import lombok.Getter;

public class JwtCustomException extends RuntimeException {
    JWT_ERROR error;

    @Getter
    public enum JWT_ERROR {
        BADTYPE(401, "지원되지 않는 JWT 토큰입니다."),
        MALFORM(402, "잘못된 JWT 서명입니다."),
        BADSIGN(403, "JWT 토큰이 잘못되었습니다."),
        EXPIRED(404, "만료된 JWT 토큰입니다.");

        private int status;
        private String message;

        JWT_ERROR(int status, String message) {
            this.status = status;
            this.message = message;
        }
    }

    public JwtCustomException(JWT_ERROR error) {
        super(error.name());
        this.error = error;
    }

    public void sendResponseError(HttpServletResponse response) throws IOException{
        response.setStatus(error.getStatus());
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.getWriter().print(error.getMessage());
    }
}