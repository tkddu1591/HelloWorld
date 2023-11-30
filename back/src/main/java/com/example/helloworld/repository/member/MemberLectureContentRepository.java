package com.example.helloworld.repository.member;

import com.example.helloworld.entity.member.MemberLectureContentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;

public interface MemberLectureContentRepository extends JpaRepository<MemberLectureContentEntity, Integer> {
    int countByLectureContent_ContentNoAndMember_Uid(int lectureContentNo, String uid);


    List<MemberLectureContentEntity> findByLectureContent_Lecture_LectureNoAndMember_Uid(int lectureNo, String uid);
}
