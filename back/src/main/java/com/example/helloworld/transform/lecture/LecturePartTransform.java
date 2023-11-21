package com.example.helloworld.transform.lecture;

import com.example.helloworld.dto.lecture.LectureDTO;
import com.example.helloworld.dto.lecture.LecturePartDTO;
import com.example.helloworld.entity.lecture.LectureEntity;
import com.example.helloworld.entity.lecture.LecturePartEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface LecturePartTransform {
    @Mapping(source = "lectureNo", target = "lecture.lectureNo")
    LecturePartEntity toEntity(LecturePartDTO dto);
    @Mapping(source = "lecture.lectureNo", target = "lectureNo")
    LecturePartDTO toDTO(LecturePartEntity entity);
}
