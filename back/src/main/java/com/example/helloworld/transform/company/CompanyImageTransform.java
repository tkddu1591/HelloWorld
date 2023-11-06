package com.example.helloworld.transform.company;

import com.example.helloworld.dto.commuity.CommunityImageDTO;
import com.example.helloworld.entity.commuity.CommunityImageEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CompanyImageTransform {
    CommunityImageEntity toEntity(CommunityImageDTO dto);
    CommunityImageDTO toDTO(CommunityImageEntity entity);
}
