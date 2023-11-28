package com.example.helloworld.dto.member.email;

import lombok.Getter;

@Getter
public enum EmailFormat {
    SIGNUP_TITLE("HelloWorld 회원가입을 위한 인증 메일입니다."),
    SIGNUP_CONTENT("<h3> 안녕하세요.</h3>" +
            "<h3> 개발자를 위한 플랫폼 HelloWorld 입니다.</h3>" +
            "<br>" +
            "<p> 아래 코드를 회원가입 창으로 돌아가 입력해주세요.</p>" +
            "<br>" +
            "<div align='center' style='border:1px solid black; font-family:verdana; padding: 30px 0;'>" +
            "<h3 style='color:#0076ff'> 회원가입 인증 코드 입니다. </h3>" +
            "<div style='font-size:130%'>"),
    FINDPASS_TITLE("HelloWorld 비밀번호 변경을 위한 인증 메일입니다."),
    FINDPASS_CONTENT("<h3> 안녕하세요.</h3>" +
            "<h3> 개발자를 위한 플랫폼 HelloWorld 입니다.</h3>" +
            "<br>" +
            "<p> 아래 코드를 비밀번호 변경 창으로 돌아가 입력해주세요.</p>" +
            "<br>" +
            "<div align='center' style='border:1px solid black; font-family:verdana; padding: 30px 0;'>" +
            "<h3 style='color:#0076ff'> 비밀번호 변경 인증 코드 입니다. </h3>" +
            "<div style='font-size:130%'>"),
    CLOSE("</div></div><br/>");

    private final String message;

    EmailFormat(String message) {
        this.message = message;
    }
}
