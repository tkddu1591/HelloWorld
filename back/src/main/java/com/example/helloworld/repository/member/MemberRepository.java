package com.example.helloworld.repository.member;

import com.example.helloworld.entity.company.CompanyApplyEntity;
import com.example.helloworld.entity.member.MemberEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<MemberEntity, String> {


    public int countByUid(String uid);
    public int countByEmail(String email);
    public MemberEntity findByEmailAndPass(String email, String pass);
    public MemberEntity findByEmail(String email);
    public MemberEntity findByNameAndHp(String name, String hp);

}
