package com.example.helloworld.transform.commuity;

import com.example.helloworld.dto.commuity.CommunityCategoryDTO;
import com.example.helloworld.entity.commuity.CommunityCategoryEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CommunityCategoryTransform {
    CommunityCategoryDTO toDTO(CommunityCategoryEntity entity);
    CommunityCategoryEntity toEntity(CommunityCategoryDTO dto);
}
