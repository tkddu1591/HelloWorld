package com.example.helloworld.transform.lecture;

import com.example.helloworld.dto.lecture.LectureCartDTO;
import com.example.helloworld.dto.lecture.LectureDTO;
import com.example.helloworld.entity.lecture.LectureCartEntity;
import com.example.helloworld.entity.lecture.LectureEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface LectureCartTransform {
    @Mapping(target = "lecture.lectureNo", source = "lectureNo")
    @Mapping(target = "lecture.title", source = "title")
    @Mapping(target = "member.uid", source = "uid")
    LectureCartEntity toEntity(LectureCartDTO dto);

    @Mapping(source = "lecture.lectureNo",target = "lectureNo")
    @Mapping(source = "lecture.title",target = "title")
    @Mapping(source = "member.uid",target = "uid")
    LectureCartDTO toDTO(LectureCartEntity entity);
}
