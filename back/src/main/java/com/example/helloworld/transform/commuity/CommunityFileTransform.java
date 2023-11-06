package com.example.helloworld.transform.commuity;

import com.example.helloworld.dto.commuity.CommunityFileDTO;
import com.example.helloworld.entity.commuity.CommunityFileEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CommunityFileTransform {
    public CommunityFileEntity toEntity(CommunityFileDTO dto);
    public CommunityFileDTO toDTO(CommunityFileEntity entity);
}
