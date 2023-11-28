package com.example.helloworld.dto.member.security_oauth2;

import lombok.AllArgsConstructor;

import java.util.Map;

@AllArgsConstructor
public class KakaoInfo implements OAuth2MemberInfo {
    private Map<String, Object> attributes;

    @Override
    public String getProviderId() {
        return attributes.get("id").toString();
    }

    @Override
    public String getProvider() {
        return Provider.KAKAO.getName();
    }

    @Override
    public String getEmail() {
        return (String) ((Map<?, ?>) attributes.get("kakao_account")).get("email");
    }

    @Override
    public String getNickname() {
        return attributes.get("nickname").toString();
    }
}
