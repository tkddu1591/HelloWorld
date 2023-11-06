package com.example.helloworld.transform.codingtest;

import com.example.helloworld.dto.codingtest.CodingTestAnswerDTO;
import com.example.helloworld.entity.codingtest.CodingTestAnswerEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CodingTestAnswerTransform {
    @Mapping(source = "codingTest.codingTestNo", target = "codingTestNo")
    @Mapping(source = "member.uid", target = "uid")
    public CodingTestAnswerDTO toDTO(CodingTestAnswerEntity entity);
    @Mapping(target = "codingTest.codingTestNo",source = "codingTestNo")
    @Mapping(target = "member.uid",source = "uid")
    public CodingTestAnswerEntity toEntity(CodingTestAnswerDTO dto);

}