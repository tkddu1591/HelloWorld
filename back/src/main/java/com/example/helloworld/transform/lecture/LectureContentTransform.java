package com.example.helloworld.transform.lecture;

import com.example.helloworld.dto.lecture.LectureContentDTO;
import com.example.helloworld.dto.lecture.LectureDTO;
import com.example.helloworld.entity.lecture.LectureCartEntity;
import com.example.helloworld.entity.lecture.LectureContentEntity;
import com.example.helloworld.entity.lecture.LectureEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface LectureContentTransform {
    @Mapping(source = "lectureNo", target = "lecture.lectureNo")
    @Mapping(source = "partNo", target = "part.partNo")
    LectureContentEntity toEntity(LectureContentDTO dto);

    @Mapping(target = "lectureNo",source = "lecture.lectureNo")
    @Mapping(target = "partNo",source = "part.partNo")
    LectureContentDTO toDTO(LectureContentEntity entity);
}
