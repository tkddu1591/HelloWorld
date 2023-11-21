package com.example.helloworld.repository.lecture;

import com.example.helloworld.entity.lecture.LectureCartEntity;
import com.example.helloworld.entity.lecture.LecturePartEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LecturePartRepository extends JpaRepository<LecturePartEntity, Integer> {
    public void deleteByPartNoBetween(int start, int end);

    int countByPartNoBetween(int lastNo, int nextNo);
}
