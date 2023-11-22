package com.example.helloworld.transform.lecture;

import com.example.helloworld.dto.lecture.LectureOrderItemDTO;
import com.example.helloworld.entity.lecture.LectureOrderItemEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface LectureOrderItemTransform {
    LectureOrderItemEntity toEntity(LectureOrderItemDTO dto);
    LectureOrderItemDTO toDTO(LectureOrderItemEntity entity);
}
