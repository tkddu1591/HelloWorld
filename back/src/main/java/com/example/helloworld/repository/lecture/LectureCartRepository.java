package com.example.helloworld.repository.lecture;

import com.example.helloworld.entity.company.CompanyApplyEntity;
import com.example.helloworld.entity.lecture.LectureCartEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LectureCartRepository extends JpaRepository<LectureCartEntity, Integer> {
    LectureCartEntity findByMember_UidAndLecture_LectureNo(String uid, int lectureNo);

    int countByMember_UidAndLecture_LectureNo(String uid, int lectureNo);

    List<LectureCartEntity> findByMember_Uid(String uid);

    void deleteByCartNo(int cartNo);

    void deleteByMember_Uid(String uid);
}
