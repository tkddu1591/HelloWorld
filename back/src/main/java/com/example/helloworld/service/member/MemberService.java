package com.example.helloworld.service.member;

import com.example.helloworld.dto.member.MemberDTO;
import com.example.helloworld.repository.member.MemberRepository;
import com.example.helloworld.transform.member.MemberTransform;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Log4j2
@RequiredArgsConstructor
@Service
public class MemberService {

    private final MemberRepository memberRepository;
    private final MemberTransform memberTransform;

    public boolean signUp(MemberDTO memberDTO) {
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
