package com.example.helloworld.repository.codingtest;

import com.example.helloworld.entity.codingtest.CodingTestAnswerEntity;
import com.example.helloworld.entity.codingtest.CodingTestEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CodingTestRepository extends JpaRepository<CodingTestEntity, Integer> {
}
