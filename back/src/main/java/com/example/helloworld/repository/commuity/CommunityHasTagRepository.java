package com.example.helloworld.repository.commuity;

import com.example.helloworld.entity.commuity.CommunityCategoryEntity;
import com.example.helloworld.entity.commuity.CommunityEntity;
import com.example.helloworld.entity.commuity.CommunityHasTagEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommunityHasTagRepository extends JpaRepository<CommunityHasTagEntity, Integer> {


    public List<CommunityHasTagEntity> findByCommunity_CommunityNo(int communityNo);
}
