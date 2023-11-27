package com.example.helloworld.dto.member.oauth2;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class NaverParams {
    private String grant_type;
    private String client_id;
    private String client_secret;
    private String code;
    private String state;
}
