package com.example.helloworld.transform.commuity;

import com.example.helloworld.dto.commuity.CommunityCommentDTO;
import com.example.helloworld.entity.commuity.CommunityCommentEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CommunityCommentTransform {
    @Mapping(source = "member.uid", target = "memberUid")
    @Mapping(source = "member.nick", target = "nick")
    @Mapping(source = "member.profileImg", target = "profileImg")
    public CommunityCommentDTO toDTO(CommunityCommentEntity entity);
    @Mapping(target = "member.uid", source = "memberUid")
    @Mapping(target = "member.nick", source = "nick")
    @Mapping(target = "member.profileImg", source = "profileImg")
    public CommunityCommentEntity toEntity(CommunityCommentDTO dto);
}
