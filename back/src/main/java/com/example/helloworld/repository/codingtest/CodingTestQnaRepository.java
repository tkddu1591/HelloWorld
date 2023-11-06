package com.example.helloworld.repository.codingtest;

import com.example.helloworld.entity.codingtest.CodingTestQnaEntitiy;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CodingTestQnaRepository extends JpaRepository<CodingTestQnaEntitiy, Integer> {
}
