package com.example.helloworld.service.member;

import com.example.helloworld.dto.member.MemberDTO;
import com.example.helloworld.repository.member.MemberRepository;
import com.example.helloworld.transform.member.MemberTransform;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.dao.DataAccessException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Log4j2
@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final MemberTransform memberTransform;
    private final PasswordEncoder passwordEncoder;

    public boolean signUp(MemberDTO memberDTO, HttpServletRequest request) {
        String pass1 = memberDTO.getPass();
        String pass2 = memberDTO.getPassChk();
        log.info(" - signUp > Email : " + memberDTO.getEmail());
        log.info(" - signUp > pass1 : " + pass1);
        log.info(" - signUp > pass2 : " + pass2);

        if(pass1 == null || pass2 == null) return false;
        if(!pass1.equals(pass2)) return false;

        memberDTO.setUid(UUID.randomUUID().toString());
        memberDTO.setRegIp(request.getRemoteAddr());
        memberDTO.setPass(passwordEncoder.encode(memberDTO.getPass()));

        try {
            memberRepository.save(memberTransform.toEntity(memberDTO));
            log.info(" - signUp > successfully saved...");
            return true;
        } catch (DataAccessException e) {
            log.error(" - signUp > save failed... DataAccessException : " + e.getMessage());
            return false;
        }
    }
}
