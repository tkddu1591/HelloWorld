package com.example.helloworld.repository.commuity;

import com.example.helloworld.entity.codingtest.CodingTestAnswerEntity;
import com.example.helloworld.entity.commuity.CommunityCommentEntity;
import com.example.helloworld.entity.commuity.CommunityEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommunityCommentRepository extends JpaRepository<CommunityCommentEntity, Integer> {

    public Page<CommunityCommentEntity> findByCommunity_CommunityNo(int communityNo, Pageable pageable);

    @Transactional
    @Modifying
    @Query("UPDATE CommunityCommentEntity c SET c.isDeleted = -1 WHERE c.commentNo = :commentNo")
    public void updateIsDeletedByCommentNo(int commentNo);

    /*public void save(int communityNo, String content);*/
}
