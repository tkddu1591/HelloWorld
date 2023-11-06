package com.example.helloworld.repository.commuity;

import com.example.helloworld.entity.codingtest.CodingTestAnswerEntity;
import com.example.helloworld.entity.commuity.CommunityCategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommunityCategoryRepository extends JpaRepository<CommunityCategoryEntity, Integer> {
}
