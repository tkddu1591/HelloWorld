package com.example.helloworld.transform.commuity;

import com.example.helloworld.dto.commuity.CommunityDTO;
import com.example.helloworld.entity.commuity.CommunityEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CommunityTransform {
    @Mapping(source = "study.studyNo", target = "studyNo")
    @Mapping(source = "file.fileNo", target = "fileNo")
    @Mapping(source = "hasTag.hasTagNo", target = "hasTagNo")
    CommunityDTO toDTO(CommunityEntity community);

    @Mapping(target = "study.studyNo", source = "studyNo")
    @Mapping(target = "file.fileNo", source = "fileNo")
    @Mapping(target = "hasTag.hasTagNo", source = "hasTagNo")
    CommunityEntity toEntity(CommunityDTO communityDTO);
}
