package com.example.helloworld.dto.member.security_oauth2;

import lombok.AllArgsConstructor;

import java.util.Map;

@AllArgsConstructor
public class NaverInfo implements OAuth2MemberInfo {
    private Map<String, Object> attributes;

    @Override
    public String getProviderId() {
        return (String) attributes.get("sub");
    }

    @Override
    public String getProvider() {
        return Provider.NAVER.getName();
    }

    @Override
    public String getEmail() {
        return (String) attributes.get("email");
    }

    @Override
    public String getNickname() {
        return null;
    }
}
