package com.example.helloworld.repository.commuity;

import com.example.helloworld.entity.codingtest.CodingTestAnswerEntity;
import com.example.helloworld.entity.commuity.CommunityCommentEntity;
import com.example.helloworld.entity.commuity.CommunityEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommunityCommentRepository extends JpaRepository<CommunityCommentEntity, Integer> {

    public Page<CommunityCommentEntity> findByCommunity_CommunityNo(int communityNo, Pageable pageable);

    /*public void save(int communityNo, String content);*/
}
