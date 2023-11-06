package com.example.helloworld.repository.codingtest;

import com.example.helloworld.entity.codingtest.CodingTestTagEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CodingTestTagRepository extends JpaRepository<CodingTestTagEntity, String> {
}
