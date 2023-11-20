package com.example.helloworld.repository.lecture;

import com.example.helloworld.entity.lecture.LectureEntity;
import com.example.helloworld.entity.lecture.LectureThumbEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LectureThumbRepository extends JpaRepository<LectureThumbEntity, String> {
}
