package com.example.helloworld.transform.commuity;

import com.example.helloworld.dto.commuity.CommunityStudyMemberDTO;
import com.example.helloworld.entity.commuity.CommunityStudyMemberEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CommunityStudyMemberTransform {
    CommunityStudyMemberDTO toDTO(CommunityStudyMemberEntity communityStudyMember);
    CommunityStudyMemberEntity toEntity(CommunityStudyMemberDTO communityStudyMemberDTO);
}
