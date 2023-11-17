package com.example.helloworld.transform.lecture;

import com.example.helloworld.dto.lecture.LectureDTO;
import com.example.helloworld.dto.lecture.LectureLevelDTO;
import com.example.helloworld.entity.lecture.LectureEntity;
import com.example.helloworld.entity.lecture.LectureLevelEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface LectureLevelTransform {
    LectureLevelEntity toEntity(LectureLevelDTO dto);
    LectureLevelDTO toDTO(LectureLevelEntity entity);
}
