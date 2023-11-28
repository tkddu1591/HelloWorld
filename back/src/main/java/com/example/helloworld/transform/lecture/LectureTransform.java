package com.example.helloworld.transform.lecture;

import com.example.helloworld.dto.lecture.LectureDTO;
import com.example.helloworld.dto.member.MemberDTO;
import com.example.helloworld.entity.lecture.LectureEntity;
import com.example.helloworld.entity.lecture.LectureHasTagEntity;
import com.example.helloworld.entity.lecture.LectureTagEntity;
import com.example.helloworld.entity.member.MemberEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;
import java.util.stream.Collectors;@Mapper(componentModel = "spring")
public interface LectureTransform {
    @Mapping(target = "thumb.thumbURL", source = "thumbURL")
    @Mapping(target = "thumb.thumbName", source = "thumbName")
    @Mapping(target = "level.levelNo", source = "levelNo")
    @Mapping(target = "member.uid", source = "seller")
    LectureEntity toEntity(LectureDTO dto);

    @Mapping(source = "thumb.thumbURL", target = "thumbURL")
    @Mapping(source = "thumb.thumbName", target = "thumbName")
    @Mapping(source = "level.levelNo", target = "levelNo")
    @Mapping(target = "hasTagNames", expression = "java(mapTagNames(entity.getHasTags()))")
    @Mapping(source = "member.uid", target = "seller")
    LectureDTO toDTO(LectureEntity entity);

    default List<String> mapTagNames(List<LectureHasTagEntity> hasTags) {
        return hasTags.stream()
                .map(LectureHasTagEntity::getTag)
                .map(LectureTagEntity::getTagName)
                .collect(Collectors.toList());
    }

    default LectureDTO toDTOFromSingleEntity(LectureEntity entity) {
        LectureDTO dto = toDTO(entity);
        dto.setHasTagNames(mapTagNames(entity.getHasTags()));
        return dto;
    }
    default List<LectureDTO> toDTOList(List<LectureEntity> entities) {
        return entities.stream()
                .map(entity -> {
                    LectureDTO dto = toDTO(entity);
                    dto.setHasTagNames(mapTagNames(entity.getHasTags()));
                    return dto;
                })
                .toList();
    }
}
