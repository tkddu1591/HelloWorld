package com.example.helloworld.transform.commuity;

import com.example.helloworld.dto.commuity.CommunityHasTagDTO;
import com.example.helloworld.entity.commuity.CommunityHasTagEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CommunityHasTagTransform {
    @Mapping(source = "tag.tagNo", target = "tagNo")
    @Mapping(source = "tag.tagName", target = "tagName")
    @Mapping(source = "community.communityNo", target = "communityNo")
    CommunityHasTagDTO toDTO(CommunityHasTagEntity communityHasTag);
    @Mapping(target = "tag.tagNo", source = "tagNo")
    @Mapping(target = "tag.tagName", source = "tagName")
    @Mapping(target = "community.communityNo", source = "communityNo")
    CommunityHasTagEntity toEntity(CommunityHasTagDTO communityHasTagDTO);
}
