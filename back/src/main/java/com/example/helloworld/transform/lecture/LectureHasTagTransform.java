package com.example.helloworld.transform.lecture;

import com.example.helloworld.dto.lecture.LectureDTO;
import com.example.helloworld.dto.lecture.LectureHasTagDTO;
import com.example.helloworld.entity.lecture.LectureEntity;
import com.example.helloworld.entity.lecture.LectureHasTagEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface LectureHasTagTransform {
    LectureHasTagEntity toEntity(LectureHasTagDTO dto);
    LectureHasTagDTO toDTO(LectureHasTagEntity entity);
}
