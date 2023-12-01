package com.example.helloworld.service.member;

import com.example.helloworld.dto.member.MemberDTO;
import com.example.helloworld.entity.member.MemberEntity;
import com.example.helloworld.repository.member.MemberRepository;
import com.example.helloworld.security.SecurityUtils;
import com.example.helloworld.transform.member.MemberTransform;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.dao.DataAccessException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

@Log4j2
@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final MemberTransform  memberTransform;
    private final PasswordEncoder  passwordEncoder;
    private final EmailService     emailService;

    public String getCurrentTime() {
        return LocalDateTime.now(ZoneId.of("Asia/Seoul"))
                .format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
    }

    public boolean signUp(MemberDTO memberDTO, HttpServletRequest request) {
        String pass1 = memberDTO.getPass();
        String pass2 = memberDTO.getPassChk();
        log.info(" - signUp > Email : " + memberDTO.getEmail());
        log.info(" - signUp > pass1 : " + pass1);
        log.info(" - signUp > pass2 : " + pass2);

        if(pass1 == null || pass2 == null) return false;
        if(!pass1.equals(pass2)) return false;

        memberDTO.setUid(UUID.randomUUID().toString());
        memberDTO.setNick(emailService.createAuthCode());
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

    public MemberDTO getMyInfo() {
        MemberDTO myInfo = memberTransform.toDTO(memberRepository.findByEmail(SecurityUtils.getMyEmail()));
        if(myInfo != null) myInfo.setPass("*");
        return myInfo;
    }

    public String findMyEmail(String name, String hp) {
        return memberRepository.findByNameAndHp(name, hp).getEmail();
    }

    public boolean findMyPass(MemberDTO memberDTO) {
        String email   = memberDTO.getEmail();
        String pass    = memberDTO.getPass();
        String passChk = memberDTO.getPassChk();

        if(pass == null || !pass.equals(passChk)) return false;

        MemberEntity memberEntity = memberRepository.findByEmail(email);
        if(memberEntity == null) return false;
        String fstPass = memberEntity.getPass();

        memberEntity.setPass(passwordEncoder.encode(memberDTO.getPass()));

        MemberEntity resultEntity = memberRepository.save(memberEntity);
        String scdPass = resultEntity.getPass();

        return !fstPass.equals(scdPass);
    }

    public MemberDTO modifyUserInfo(MemberDTO memberDTO) {
        MemberEntity member = memberRepository.findByEmail(memberDTO.getEmail());
        member.setNick(memberDTO.getNick());
        member.setName(memberDTO.getName());
        member.setHp(memberDTO.getHp());

        MemberEntity entity = memberRepository.save(member);
        return memberTransform.toDTO(entity);
    }

    public MemberDTO modifySellerInfo(MemberDTO memberDTO) {
        MemberEntity member = memberRepository.findByEmail(memberDTO.getEmail());
        member.setType(memberDTO.getType());
        member.setCeo(memberDTO.getCeo());
        member.setCompany(memberDTO.getCompany());
        member.setTel(memberDTO.getTel());
        member.setFax(memberDTO.getFax());
        member.setBizRegNum(memberDTO.getBizRegNum());
        member.setComRegNum(memberDTO.getComRegNum());

        MemberEntity entity = memberRepository.save(member);
        return memberTransform.toDTO(entity);
    }

    public MemberDTO deleteAccount(String email) {
        MemberEntity entity = memberRepository.findByEmail(email);
        MemberEntity tempEntity = MemberEntity.builder()
                .uid(entity.getUid())
                .email(entity.getEmail())
                .isCondition(2)
                .regIp(entity.getRegIp())
                .regDate(entity.getRegDate())
                .wdate(LocalDateTime.now(ZoneId.of("Asia/Seoul")))
                .build();
        return memberTransform.toDTO(memberRepository.save(tempEntity));
    }

    public MemberDTO applyForSellerType(String email, int type) {
        log.info("email : " + email + ", type : " + type);
        MemberEntity entity = memberRepository.findByEmail(email);
        entity.setType(type);
        return memberTransform.toDTO(memberRepository.save(entity));
    }
}