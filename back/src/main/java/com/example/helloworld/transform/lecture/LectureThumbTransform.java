package com.example.helloworld.transform.lecture;

import com.example.helloworld.dto.lecture.LectureTagDTO;
import com.example.helloworld.dto.lecture.LectureThumbDTO;
import com.example.helloworld.entity.lecture.LectureTagEntity;
import com.example.helloworld.entity.lecture.LectureThumbEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface LectureThumbTransform {
    LectureThumbEntity toEntity(LectureThumbDTO dto);
    LectureThumbDTO toDTO(LectureThumbEntity entity);
}
