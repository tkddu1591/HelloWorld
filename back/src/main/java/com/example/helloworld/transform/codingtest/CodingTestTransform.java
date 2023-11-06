package com.example.helloworld.transform.codingtest;

import com.example.helloworld.dto.codingtest.CodingTestDTO;
import com.example.helloworld.entity.codingtest.CodingTestEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CodingTestTransform {
    public CodingTestEntity toEntity(CodingTestDTO dto);
    public CodingTestDTO toDTO(CodingTestEntity entity);
}
