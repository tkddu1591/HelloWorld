package com.example.helloworld.repository.commuity;

import com.example.helloworld.entity.commuity.CommunityCategoryEntity;
import com.example.helloworld.entity.commuity.CommunityHasTagEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommunityHasTagRepository extends JpaRepository<CommunityHasTagEntity, Integer> {
}
