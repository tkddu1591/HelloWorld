package com.example.helloworld.dto.member;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MemberDTO {
    private String uid;
    private String nick;
    private String pass;
    private String name;
    private int gender;
    private String hp;
    private String email;
    private int type;
    private int point;
    private String zip;
    private String addr1;
    private String addr2;
    private String company;
    private String ceo;
    private String bizRegNum;
    private String comRegNum;
    private String tel;
    private String fax;
    private String regIp;
    private LocalDateTime wdate;
    private LocalDateTime regDate;
    private int isCondition;
    private String profileImg;
    private String etc1;
    private String etc2;
    private String etc3;
    private String etc4;
    private String etc5;
}
