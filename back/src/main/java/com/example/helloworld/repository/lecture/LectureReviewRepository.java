package com.example.helloworld.repository.lecture;

import com.example.helloworld.entity.lecture.LectureCartEntity;
import com.example.helloworld.entity.lecture.LectureReviewEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LectureReviewRepository extends JpaRepository<LectureReviewEntity, Integer> {
}
