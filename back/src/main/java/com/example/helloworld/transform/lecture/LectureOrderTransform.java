package com.example.helloworld.transform.lecture;

import com.example.helloworld.dto.lecture.LectureDTO;
import com.example.helloworld.dto.lecture.LectureOrderDTO;
import com.example.helloworld.entity.lecture.LectureEntity;
import com.example.helloworld.entity.lecture.LectureOrderEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface LectureOrderTransform {
    LectureOrderEntity toEntity(LectureOrderDTO dto);
    LectureOrderDTO toDTO(LectureOrderEntity entity);
}
