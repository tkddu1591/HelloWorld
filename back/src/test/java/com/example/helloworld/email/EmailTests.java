package com.example.helloworld.email;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class EmailTests {

    public char toAsciiCode(int num) {
        if(num < 10) return (char)(num+48);
        if(num > 35) return (char)(num+61);
        return (char)(num+55); // 10~ 35
    }

    // 인증코드 생성하기
    public String createAuthCode() {
        String authCode = "";
        for(int i=0; i<8; i++) {
            authCode += toAsciiCode((int)(Math.random()*62));
        }
        return authCode;
    }

    @Test
    public void Test() {
        String authCode = createAuthCode();
        System.out.println("authCode : " + authCode);
    }
}
