package com.example.helloworld.dto.member.email;

import lombok.Getter;

@Getter
public enum EmailMessage {
    DUPLICATION("이미 사용중인 이메일입니다."),
    UNDEFINED("찾을 수 없는 이메일입니다."),
    INVALID("유효한 이메일 양식이 아닙니다."),
    ERROR("이메일 전송 오류. 이메일을 확인해주세요."),
    SUCCESS("인증번호를 확인해주세요.");
    private final String message;
    EmailMessage(String message) {
        this.message = message;
    }
}
