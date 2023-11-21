package com.example.helloworld.repository.lecture;

import com.example.helloworld.entity.lecture.LectureCartEntity;
import com.example.helloworld.entity.lecture.LectureContentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LectureContentRepository extends JpaRepository<LectureContentEntity, Integer> {
    int countByContentNoBetween(int start, int end);

    void deleteByContentNoBetween(int i, int nextNo);

    void deleteByPart_PartNoBetween(int i, int nextNo);

    void deleteByPart_PartNo(int partNo);
}
