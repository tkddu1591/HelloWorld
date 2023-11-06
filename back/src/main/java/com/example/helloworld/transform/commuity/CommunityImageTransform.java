package com.example.helloworld.transform.commuity;

import com.example.helloworld.dto.commuity.CommunityImageDTO;
import com.example.helloworld.entity.commuity.CommunityImageEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CommunityImageTransform {
    CommunityImageDTO toDTO(CommunityImageEntity communityImage);
    CommunityImageEntity toEntity(CommunityImageDTO communityImageDTO);
}
