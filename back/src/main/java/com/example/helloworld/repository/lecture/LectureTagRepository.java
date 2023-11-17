package com.example.helloworld.repository.lecture;

import com.example.helloworld.entity.lecture.LectureCartEntity;
import com.example.helloworld.entity.lecture.LectureTagEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LectureTagRepository extends JpaRepository<LectureTagEntity, Integer> {
}
