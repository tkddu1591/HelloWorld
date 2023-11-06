package com.example.helloworld.transform.codingtest;

import com.example.helloworld.dto.codingtest.CodingTestAnswerDTO;
import com.example.helloworld.entity.codingtest.CodingTestAnswerEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CodingTestAnswerTransform {
    public CodingTestAnswerDTO toDTO(CodingTestAnswerEntity entity);
    public CodingTestAnswerEntity toEntity(CodingTestAnswerDTO dto);

}