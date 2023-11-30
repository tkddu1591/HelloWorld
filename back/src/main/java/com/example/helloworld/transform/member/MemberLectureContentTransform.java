package com.example.helloworld.transform.member;

import com.example.helloworld.dto.member.MemberLectureContentDTO;
import com.example.helloworld.entity.member.MemberLectureContentEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface MemberLectureContentTransform {
    @Mapping(source = "contentNo", target = "lectureContent.contentNo")
    @Mapping(source = "uid", target = "member.uid")
    @Mapping(source = "lectureNo", target = "lectureContent.lecture.lectureNo")
    MemberLectureContentEntity toEntity(MemberLectureContentDTO dto);
    @Mapping(target = "contentNo", source = "lectureContent.contentNo")
    @Mapping(target = "uid", source = "member.uid")
    @Mapping(target = "lectureNo", source = "lectureContent.lecture.lectureNo")
    MemberLectureContentDTO toDTO(MemberLectureContentEntity entity);
}
