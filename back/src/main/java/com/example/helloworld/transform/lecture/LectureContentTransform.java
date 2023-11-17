package com.example.helloworld.transform.lecture;

import com.example.helloworld.dto.lecture.LectureContentDTO;
import com.example.helloworld.dto.lecture.LectureDTO;
import com.example.helloworld.entity.lecture.LectureCartEntity;
import com.example.helloworld.entity.lecture.LectureContentEntity;
import com.example.helloworld.entity.lecture.LectureEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface LectureContentTransform {
    LectureContentEntity toEntity(LectureContentDTO dto);
    LectureContentDTO toDTO(LectureCartEntity entity);
}
