package com.example.helloworld.service.member;

import com.example.helloworld.dto.member.MemberDTO;
import com.example.helloworld.entity.member.MemberEntity;
import com.example.helloworld.jwt.JwtProvider;
import com.example.helloworld.repository.member.MemberRepository;
import com.example.helloworld.security.MyUserDetails;
import com.example.helloworld.transform.member.MemberTransform;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Log4j2
@RequiredArgsConstructor
@Service
public class MemberService {

    private final AuthenticationManager authenticationManager;
    private final JwtProvider jwtProvider;
    private final PasswordEncoder passwordEncoder;

    private final MemberRepository memberRepository;
    private final MemberTransform memberTransform;

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
        memberDTO.setRegDate(LocalDateTime.now());
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

    public MemberDTO login(String email, String pass) {
        MemberEntity memberEntity = memberRepository.findByEmailAndPass(email, pass);
        MemberDTO memberDTO = null;
        try {
            memberDTO = memberTransform.toDTO(memberEntity);
            memberDTO.setPass("비밀번호 접근금지");
        }catch (NullPointerException e) {
            log.error(" - login > NullPointerException... " + e.getMessage());
        }
        return memberDTO;
    }

    public MemberDTO defaultLogin(String email, String pass) {
        UsernamePasswordAuthenticationToken authenticationToken
                = new UsernamePasswordAuthenticationToken(email, pass);

        Authentication authentication = authenticationManager.authenticate(authenticationToken);
        MyUserDetails userDetails = (MyUserDetails) authentication.getPrincipal();

        MemberEntity member = userDetails.getMemberEntity();
        log.info(" - defaultLogin > before passReset : " + member.toString());
        member.setPass("비밀번호 암호화");
        log.info(" - defaultLogin > after passReset : " + member.toString());







        return  null;
    }
}
