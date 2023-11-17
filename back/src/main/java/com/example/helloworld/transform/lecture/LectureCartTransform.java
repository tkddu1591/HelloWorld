package com.example.helloworld.transform.lecture;

import com.example.helloworld.dto.lecture.LectureCartDTO;
import com.example.helloworld.dto.lecture.LectureDTO;
import com.example.helloworld.entity.lecture.LectureCartEntity;
import com.example.helloworld.entity.lecture.LectureEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface LectureCartTransform {
    LectureCartEntity toEntity(LectureCartDTO dto);
    LectureCartDTO toDTO(LectureCartEntity entity);
}
