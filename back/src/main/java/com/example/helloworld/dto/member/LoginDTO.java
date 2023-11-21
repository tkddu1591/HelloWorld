package com.example.helloworld.dto.member;

import lombok.*;

@Data
@Getter
@Setter
@Builder
@ToString
public class LoginDTO {
    private String email;
    private String pass;
    private String nick;
    private String cookieName;
}
