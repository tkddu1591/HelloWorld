package com.example.helloworld.transform.lecture;

import com.example.helloworld.dto.lecture.LectureDTO;
import com.example.helloworld.dto.lecture.LecturePartDTO;
import com.example.helloworld.entity.lecture.LectureEntity;
import com.example.helloworld.entity.lecture.LecturePartEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface LecturePartTransform {
    LecturePartEntity toEntity(LecturePartDTO dto);
    LecturePartDTO toDTO(LecturePartEntity entity);
}
