package com.example.helloworld.transform.commuity;

import com.example.helloworld.dto.commuity.CommunityStudyMemberDTO;
import com.example.helloworld.entity.commuity.CommunityStudyMemberEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CommunityStudyTransform {
    public CommunityStudyMemberDTO toDTO(CommunityStudyMemberEntity communityStudyMember);
    public CommunityStudyMemberEntity toEntity(CommunityStudyMemberDTO communityStudyMemberDto);
}
