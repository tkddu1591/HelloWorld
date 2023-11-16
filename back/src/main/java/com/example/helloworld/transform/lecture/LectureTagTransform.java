package com.example.helloworld.transform.lecture;

import com.example.helloworld.dto.lecture.LectureDTO;
import com.example.helloworld.dto.lecture.LectureTagDTO;
import com.example.helloworld.entity.lecture.LectureEntity;
import com.example.helloworld.entity.lecture.LectureHasTagEntity;
import com.example.helloworld.entity.lecture.LectureTagEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface LectureTagTransform {
    LectureTagEntity toEntity(LectureTagDTO dto);
    LectureTagDTO toDTO(LectureTagEntity entity);
}
