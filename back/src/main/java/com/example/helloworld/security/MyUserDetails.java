package com.example.helloworld.security;

import com.example.helloworld.entity.member.MemberEntity;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Getter
@Setter
@ToString
public class MyUserDetails implements UserDetails {
    private final MemberEntity memberEntity;

    public MyUserDetails(MemberEntity memberEntity) {
        this.memberEntity = memberEntity;
    }
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_" + memberEntity.getType()));
        return authorities;
    }

    @Override
    public String getPassword() {
        // 계정이 갖는 비밀번호
        return memberEntity.getPass();
    }

    @Override
    public String getUsername() {
        // 계정이 갖는 아이디
        return memberEntity.getUid();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    } // 계정 만료 여부(true:만료 안 됨, false:만료)

    @Override
    public boolean isAccountNonLocked() {
        return true;
    } // 계정 잠김 여부(true:잠김 안 됨, false:잠김)

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    } // 계정 비밀번호 만료 여부(true:만료 안 됨, false:만료)

    @Override
    public boolean isEnabled() {
        return true;
    } // 계정 활성화 여부(true:활성화, false:비활성화)
}