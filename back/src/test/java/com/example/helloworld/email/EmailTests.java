package com.example.helloworld.email;

import groovy.util.logging.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class EmailTests {

    public char toAsciiCode(double num) {
        System.out.println("input number.. : " + (int) num + ",,,, " + num);
        if(num < 10) return (char)(num+48);
        if(num > 35) return (char)(num+61);
        return (char)(num+55);
    }

    // 인증코드 생성하기
    public String createAuthenticationCode() {
        String authCode = "";
        for(int i=0; i<8; i++) {
            authCode += toAsciiCode((Math.random()*62));
            System.out.println(" - step " + i+1 + " : " + authCode);
        }

        return authCode;
    }

    @Test
    public void Test() {
        String authCode = createAuthenticationCode();
        System.out.println("authCode : " + authCode);
    }
}
