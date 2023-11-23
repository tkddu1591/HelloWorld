package com.example.helloworld.repository.lecture;

import com.example.helloworld.entity.lecture.LectureCartEntity;
import com.example.helloworld.entity.lecture.LectureHasTagEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;

public interface LectureHasTagRepository extends JpaRepository<LectureHasTagEntity, Integer> {
    List<LectureHasTagEntity> findByLecture_LectureNo(int lectureNo);

    void deleteByLecture_LectureNo(int lectureNo);
}
