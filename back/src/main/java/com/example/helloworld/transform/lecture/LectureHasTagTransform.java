package com.example.helloworld.transform.lecture;

import com.example.helloworld.dto.lecture.LectureDTO;
import com.example.helloworld.dto.lecture.LectureHasTagDTO;
import com.example.helloworld.entity.lecture.LectureEntity;
import com.example.helloworld.entity.lecture.LectureHasTagEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface LectureHasTagTransform {
    @Mapping(source = "lectureNo", target = "lecture.lectureNo")
    @Mapping(source = "tagNo", target = "tag.tagNo")
    LectureHasTagEntity toEntity(LectureHasTagDTO dto);
    @Mapping(source = "lecture.lectureNo", target = "lectureNo")
    @Mapping(source = "tag.tagNo", target = "tagNo")
    LectureHasTagDTO toDTO(LectureHasTagEntity entity);
}
