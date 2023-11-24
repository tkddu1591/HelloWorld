package com.example.helloworld.entity.member;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "member")
public class MemberEntity implements Serializable {
    @Id
    private String uid;
    private String nick;
    private String pass;
    private String name;
    private int    gender;
    private String hp;
    private String email;
    private int    type;
    private int    point;
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
    @CreationTimestamp
    private LocalDateTime regDate;
    private LocalDateTime wdate;
    private int    isCondition;
    private String profileImg;
    private String etc1;
    private String etc2;
    private String etc3;
    private String etc4;
    private String etc5;


/*    @Override
    public Map<String, Object> getAttributes() {
        Map<String, Object> member = new HashMap<>();
        member.put("uid",         uid);
        member.put("nick",        nick);
        member.put("pass",        pass);
        member.put("name",        name);
        member.put("gender",      gender);
        member.put("hp",          hp);
        member.put("email",       email);
        member.put("type",        type);
        member.put("point",       point);
        member.put("zip",         zip);
        member.put("addr1",       addr1);
        member.put("addr2",       addr2);
        member.put("company",     company);
        member.put("ceo",         ceo);
        member.put("bizRegNum",   bizRegNum);
        member.put("comRegNum",   comRegNum);
        member.put("tel",         tel);
        member.put("fax",         fax);
        member.put("regIp",       regIp);
        member.put("wdate",       wdate);
        member.put("regDate",     regDate);
        member.put("isCondition", isCondition);
        member.put("profileImg",  profileImg);
        member.put("etc1",        etc1);
        member.put("etc2",        etc2);
        member.put("etc3",        etc3);
        member.put("etc4",        etc4);
        member.put("etc5",        etc5);
        return member;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }*/
}
