package com.example.helloworld.repository.lecture;

import com.example.helloworld.entity.lecture.LectureCartEntity;
import com.example.helloworld.entity.lecture.LectureLevelEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LectureLevelRepository extends JpaRepository<LectureLevelEntity, Integer> {
}
