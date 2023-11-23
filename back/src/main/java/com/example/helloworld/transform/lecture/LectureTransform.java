package com.example.helloworld.transform.lecture;

import com.example.helloworld.dto.lecture.LectureDTO;
import com.example.helloworld.dto.member.MemberDTO;
import com.example.helloworld.entity.lecture.LectureEntity;
import com.example.helloworld.entity.member.MemberEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface LectureTransform {
    @Mapping(target = "thumb.thumbURL",source = "thumbURL")
    @Mapping(target = "thumb.thumbName",source = "thumbName")
    @Mapping(target = "level.levelNo",source = "levelNo")
    LectureEntity toEntity(LectureDTO dto);

    @Mapping(source= "thumb.thumbURL",target = "thumbURL")
    @Mapping(source= "thumb.thumbName",target = "thumbName")
    @Mapping(source= "level.levelNo",target = "levelNo")
    LectureDTO toDTO(LectureEntity entity);
}
