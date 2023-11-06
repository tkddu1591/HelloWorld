package com.example.helloworld.transform.commuity;

import com.example.helloworld.dto.commuity.CommunityTagDTO;
import com.example.helloworld.entity.commuity.CommunityHasTagEntity;
import com.example.helloworld.entity.commuity.CommunityTagEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CommunityTagTransform {
    CommunityTagDTO toDTO(CommunityTagEntity communityTag);
    CommunityHasTagEntity toEntity(CommunityTagDTO communityTagDTO);
}
