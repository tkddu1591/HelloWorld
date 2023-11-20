package com.example.helloworld.repository.lecture;

import com.example.helloworld.entity.lecture.LectureCartEntity;
import com.example.helloworld.entity.lecture.LectureEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LectureRepository extends JpaRepository<LectureEntity, Integer> {
}
