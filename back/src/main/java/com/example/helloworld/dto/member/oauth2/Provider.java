package com.example.helloworld.dto.member.oauth2;

import lombok.Getter;

@Getter
public enum Provider {
    GOOGLE("google"),
    GITHUB("github"),
    NAVER("naver"),
    KAKAO("kakao");

    private final String name;
    Provider(String name) {
        this.name = name;
    }
}
