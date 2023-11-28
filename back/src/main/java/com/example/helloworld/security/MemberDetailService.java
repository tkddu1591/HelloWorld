package com.example.helloworld.security;

import com.example.helloworld.entity.member.MemberEntity;
import com.example.helloworld.repository.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Log4j2
@Service
@RequiredArgsConstructor
public class MemberDetailService implements UserDetailsService {

    private final MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        MemberEntity memberEntity = memberRepository.findByEmail(email);
        log.info(" - loadUserByUsername > memberEntity : "+ memberEntity);
        return MemberDetails.builder()
                .memberEntity(memberEntity)
                .build();
    }
}