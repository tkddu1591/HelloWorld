package com.example.helloworld.repository.lecture;

import com.example.helloworld.entity.lecture.LectureCartEntity;
import com.example.helloworld.entity.lecture.LectureHasTagEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LectureHasTagRepository extends JpaRepository<LectureHasTagEntity, Integer> {
}
