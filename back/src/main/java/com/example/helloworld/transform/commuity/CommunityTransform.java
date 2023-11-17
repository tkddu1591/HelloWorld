package com.example.helloworld.transform.commuity;

import com.example.helloworld.dto.commuity.CommunityDTO;
import com.example.helloworld.entity.commuity.CommunityEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CommunityTransform {
    @Mapping(source = "study.studyNo", target = "studyNo")
    @Mapping(source = "file.fileNo", target = "fileNo")
    @Mapping(source = "cate.cateNo", target = "cateNo")
    @Mapping(source = "member.uid", target = "uid")
    @Mapping(source = "member.nick", target = "nick")
    @Mapping(source = "member.profileImg", target = "profileImg")
    @Mapping(source = "cate.boardName", target = "boardName")
    CommunityDTO toDTO(CommunityEntity community);

    @Mapping(target = "study.studyNo", source = "studyNo")
    @Mapping(target = "file.fileNo", source = "fileNo")
    @Mapping(target = "cate.cateNo", source = "cateNo")
    @Mapping(target= "member.uid", source = "uid")
    @Mapping(target= "member.nick", source = "nick")
    @Mapping(target = "member.profileImg", source = "profileImg")
    @Mapping(target = "cate.boardName", source = "boardName")
    CommunityEntity toEntity(CommunityDTO communityDTO);
}
