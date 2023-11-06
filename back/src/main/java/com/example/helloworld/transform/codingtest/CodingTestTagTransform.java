package com.example.helloworld.transform.codingtest;

import com.example.helloworld.dto.codingtest.CodingTestTagDTO;
import com.example.helloworld.entity.codingtest.CodingTestTagEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CodingTestTagTransform {

    @Mapping(target = "codingTest.codingTestNo", source = "codingTestNo")
    @Mapping(target = "member.uid", source = "uid")
    public CodingTestTagEntity toEntity(CodingTestTagDTO dto);

    @Mapping(source = "codingTest.codingTestNo",target = "codingTestNo")
    @Mapping(source = "member.uid",target = "uid")
    public CodingTestTagDTO toDTO(CodingTestTagEntity entity);
}
