package com.example.helloworld.transform.codingtest;

import com.example.helloworld.dto.codingtest.CodingTestTagDTO;
import com.example.helloworld.entity.codingtest.CodingTestTagEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CodingTestTagTransform {
    public CodingTestTagEntity toEntity(CodingTestTagDTO dto);
    public CodingTestTagDTO toDTO(CodingTestTagEntity entity);
}
