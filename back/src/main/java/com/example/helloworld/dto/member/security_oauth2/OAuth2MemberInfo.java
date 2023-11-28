package com.example.helloworld.dto.member.security_oauth2;

public interface OAuth2MemberInfo {
    String getProviderId();
    String getProvider();
    String getEmail();
    String getNickname();
}
