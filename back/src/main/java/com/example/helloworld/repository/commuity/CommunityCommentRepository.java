package com.example.helloworld.repository.commuity;

import com.example.helloworld.entity.codingtest.CodingTestAnswerEntity;
import com.example.helloworld.entity.commuity.CommunityCommentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommunityCommentRepository extends JpaRepository<CommunityCommentEntity, Integer> {
}
