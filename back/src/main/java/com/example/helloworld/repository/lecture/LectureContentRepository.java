package com.example.helloworld.repository.lecture;

import com.example.helloworld.entity.lecture.LectureCartEntity;
import com.example.helloworld.entity.lecture.LectureContentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LectureContentRepository extends JpaRepository<LectureContentEntity, Integer> {
}
