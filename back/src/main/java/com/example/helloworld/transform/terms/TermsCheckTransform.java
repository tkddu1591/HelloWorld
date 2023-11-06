package com.example.helloworld.transform.terms;

import com.example.helloworld.dto.terms.TermsCheckDTO;
import com.example.helloworld.entity.terms.TermsCheckEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface TermsCheckTransform {
    TermsCheckEntity toEntity(TermsCheckDTO dto);
    TermsCheckDTO toDTO(TermsCheckEntity entity);
}
