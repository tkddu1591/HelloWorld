package com.example.helloworld.repository.commuity;

import com.example.helloworld.entity.commuity.CommunityCategoryEntity;
import com.example.helloworld.entity.commuity.CommunityStudyEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommunityStudyMemberRepository extends JpaRepository<CommunityStudyEntity, Integer> {
}
