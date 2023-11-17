package com.example.helloworld.repository.lecture;

import com.example.helloworld.entity.company.CompanyApplyEntity;
import com.example.helloworld.entity.lecture.LectureCartEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LectureCartRepository extends JpaRepository<LectureCartEntity, Integer> {
}
