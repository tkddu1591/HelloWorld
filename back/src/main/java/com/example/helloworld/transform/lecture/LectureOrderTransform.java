package com.example.helloworld.transform.lecture;

import com.example.helloworld.dto.lecture.LectureDTO;
import com.example.helloworld.dto.lecture.LectureOrderDTO;
import com.example.helloworld.entity.lecture.LectureEntity;
import com.example.helloworld.entity.lecture.LectureOrderEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface LectureOrderTransform {
    @Mapping(source = "uid", target = "member.uid")
    LectureOrderEntity toEntity(LectureOrderDTO dto);
    @Mapping(target = "uid",source = "member.uid")
    LectureOrderDTO toDTO(LectureOrderEntity entity);
}
