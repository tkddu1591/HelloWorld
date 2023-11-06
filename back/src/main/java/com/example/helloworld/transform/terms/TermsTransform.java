package com.example.helloworld.transform.terms;

import com.example.helloworld.dto.terms.TermsDTO;
import com.example.helloworld.entity.terms.TermsEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface TermsTransform {
    TermsDTO toDTO(TermsEntity terms);
    TermsEntity toEntity(TermsDTO termsDTO);
}
