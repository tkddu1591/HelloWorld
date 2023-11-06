package com.example.helloworld.repository.codingtest;

import com.example.helloworld.entity.codingtest.CodingTestAnswerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CodingTestAnswerRepository extends JpaRepository<CodingTestAnswerEntity, Integer> {
}
