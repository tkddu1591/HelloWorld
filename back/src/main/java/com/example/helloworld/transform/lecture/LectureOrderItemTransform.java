package com.example.helloworld.transform.lecture;

import com.example.helloworld.dto.lecture.LectureOrderItemDTO;
import com.example.helloworld.entity.lecture.LectureOrderItemEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface LectureOrderItemTransform {
    @Mapping(source = "ordNo", target = "order.ordNo")
    @Mapping(source = "lectureNo", target = "lecture.lectureNo")
    LectureOrderItemEntity toEntity(LectureOrderItemDTO dto);

    @Mapping(target = "ordNo",source = "order.ordNo")
    @Mapping(target = "lectureNo",source = "lecture.lectureNo")
    LectureOrderItemDTO toDTO(LectureOrderItemEntity entity);
}
