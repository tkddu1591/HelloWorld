package com.example.helloworld.transform.codingtest;

import com.example.helloworld.dto.codingtest.CodingTestQnaDTO;
import com.example.helloworld.entity.codingtest.CodingTestQnaEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CodingTestQnaTransform {
    public CodingTestQnaDTO toDTO(CodingTestQnaEntity entity);
    public CodingTestQnaEntity toEntity(CodingTestQnaDTO dto);
}
