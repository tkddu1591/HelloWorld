package com.example.helloworld.transform.commuity;

import com.example.helloworld.dto.commuity.CommunityCommentDTO;
import com.example.helloworld.entity.commuity.CommunityCommentEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CommunityCommentTransform {
    public CommunityCommentDTO toDTO(CommunityCommentEntity entity);
    public CommunityCommentEntity toEntity(CommunityCommentDTO dto);
}
