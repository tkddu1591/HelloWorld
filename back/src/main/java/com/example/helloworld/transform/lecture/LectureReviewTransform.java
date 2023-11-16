package com.example.helloworld.transform.lecture;

import com.example.helloworld.dto.lecture.LectureDTO;
import com.example.helloworld.dto.lecture.LectureReviewDTO;
import com.example.helloworld.entity.lecture.LectureEntity;
import com.example.helloworld.entity.lecture.LectureReviewEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface LectureReviewTransform {
    @Mapping(target = "lecture.lectureNo", source = "lectureNo")
    LectureReviewEntity toEntity(LectureReviewDTO dto);
    LectureReviewDTO toDTO(LectureReviewEntity entity);
}
