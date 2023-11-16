package com.example.helloworld.transform.terms;

import com.example.helloworld.dto.terms.TermsDTO;
import com.example.helloworld.entity.terms.TermsEntity;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TermsTransform {
    TermsDTO toDTO(TermsEntity terms);
    TermsEntity toEntity(TermsDTO termsDTO);
    List<TermsDTO> toDTOList(List<TermsEntity> entityList);
    List<TermsEntity> toEntityList(List<TermsDTO> dtoList);
}
