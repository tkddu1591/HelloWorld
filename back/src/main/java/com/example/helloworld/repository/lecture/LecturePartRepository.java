package com.example.helloworld.repository.lecture;

import com.example.helloworld.entity.lecture.LectureCartEntity;
import com.example.helloworld.entity.lecture.LecturePartEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;

public interface LecturePartRepository extends JpaRepository<LecturePartEntity, Integer> {
    public void deleteByPartNoBetween(int start, int end);

    int countByPartNoBetween(int lastNo, int nextNo);

    List<LecturePartEntity> findByLecture_LectureNo(int lectureNo);
}
