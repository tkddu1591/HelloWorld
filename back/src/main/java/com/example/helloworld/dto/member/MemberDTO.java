package com.example.helloworld.dto.member;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
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

    private String passChk;
    public String getGenderName() {
        return switch (type) {
            /*case 0: "비공개";*/
            case 1 -> "남";
            case 2 -> "여";
            default -> "비공개";
        };
    }
    public String getTypeName() {
        return switch (type) {
            /*case 1: return "일반회원";*/
            case 2 -> "강의판매자";
            case 3 -> "채용담당자";
            case 9 -> "ADMIN";
            default -> "일반회원";
        };
    }
    public String getConditionName() {
        return switch (isCondition) {
            /*case 0 -> "일반";*/
            case 1 -> "차단";
            case 2 -> "탈퇴";
            default -> "일반";
        };
    }
}
