package com.example.helloworld.email;

import groovy.util.logging.Log4j2;
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
        for(int i=1; i<11; i++) {
            String authCode1 = createAuthCode();
            String authCode2 = createAuthCode();
            String authCode3 = createAuthCode();
            String authCode4 = createAuthCode();
            String authCode5 = createAuthCode();
            String authCode6 = createAuthCode();
            String authCode7 = createAuthCode();
            String authCode8 = createAuthCode();
            String authCode9 = createAuthCode();
            System.out.println(i + "회차 출력");
            System.out.println("authCode1 : " + authCode1);
            System.out.println("authCode2 : " + authCode2);
            System.out.println("authCode3 : " + authCode3);
            System.out.println("authCode4 : " + authCode4);
            System.out.println("authCode5 : " + authCode5);
            System.out.println("authCode6 : " + authCode6);
            System.out.println("authCode7 : " + authCode7);
            System.out.println("authCode8 : " + authCode8);
            System.out.println("authCode9 : " + authCode9);
        }
    }
}
