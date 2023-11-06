package com.example.helloworld.transform.commuity;

import com.example.helloworld.dto.commuity.CommunityHasTagDTO;
import com.example.helloworld.entity.commuity.CommunityHasTagEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CommunityHasTagTransform {
    CommunityHasTagDTO toDTO(CommunityHasTagEntity communityHasTag);
    CommunityHasTagEntity toEntity(CommunityHasTagDTO communityHasTagDTO);
}
