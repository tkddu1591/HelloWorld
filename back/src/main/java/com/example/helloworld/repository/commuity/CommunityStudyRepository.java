package com.example.helloworld.repository.commuity;

import com.example.helloworld.entity.commuity.CommunityCategoryEntity;
import com.example.helloworld.entity.commuity.CommunityStudyMemberEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommunityStudyRepository extends JpaRepository<CommunityStudyMemberEntity, Integer> {
}
