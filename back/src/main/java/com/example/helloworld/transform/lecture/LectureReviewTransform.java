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
    @Mapping(target = "member.uid", source = "uid")
    @Mapping(target = "member.nick", source = "nick")
    LectureReviewEntity toEntity(LectureReviewDTO dto);

    @Mapping(source = "lecture.lectureNo", target = "lectureNo")
    @Mapping(source = "member.uid", target = "uid")
    @Mapping(source = "member.nick", target = "nick")
    LectureReviewDTO toDTO(LectureReviewEntity entity);
}
