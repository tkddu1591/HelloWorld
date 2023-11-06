package com.example.helloworld.repository.commuity;

import com.example.helloworld.entity.commuity.CommunityCategoryEntity;
import com.example.helloworld.entity.commuity.CommunityImageEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommunityImageRepository extends JpaRepository<CommunityImageEntity, Integer> {
}
