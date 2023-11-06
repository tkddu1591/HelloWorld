package com.example.helloworld.transform.commuity;

import com.example.helloworld.dto.commuity.CommunityDTO;
import com.example.helloworld.entity.commuity.CommunityEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CommunityTransform {
    CommunityDTO toDTO(CommunityEntity community);
    CommunityEntity toEntity(CommunityDTO communityDTO);
}
