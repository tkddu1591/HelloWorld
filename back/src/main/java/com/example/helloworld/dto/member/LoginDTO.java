package com.example.helloworld.dto.member;

import lombok.*;

@Data
@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class LoginDTO {
    private String email;
    private String pass;
    private String nick;
    private boolean isAutoLogin;
    private String cookieName;

    private String regip;
    private String provider_id;
    private String accessToken;
    private String refreshToken;
    private String myInfo;
    private String provider;
    private String code;
}