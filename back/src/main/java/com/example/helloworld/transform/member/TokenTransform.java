package com.example.helloworld.transform.member;


import com.example.helloworld.dto.member.TokenDTO;
import com.example.helloworld.entity.member.TokenEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface TokenTransform {
    TokenEntity toEntity(TokenDTO tokenDTO);
    TokenDTO toDTO(TokenEntity tokenEntity);
}
