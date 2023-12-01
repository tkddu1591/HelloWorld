package com.example.helloworld.repository.lecture;

import com.example.helloworld.dto.lecture.LectureContentDTO;
import com.example.helloworld.entity.lecture.LectureCartEntity;
import com.example.helloworld.entity.lecture.LectureContentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;

public interface LectureContentRepository extends JpaRepository<LectureContentEntity, Integer> {
    int countByContentNoBetween(int start, int end);

    void deleteByContentNoBetween(int i, int nextNo);

    void deleteByPart_PartNoBetween(int i, int nextNo);

    void deleteByPart_PartNo(int partNo);

    List<LectureContentEntity> findByLecture_LectureNo(int lectureNo);
    List<LectureContentEntity> findByPart_PartNo(int partNo);
    LectureContentEntity findByTitleAndContentNoBetween(String title, int start, int end);


    int countByLecture_LectureNo(int lectureNo);
}
