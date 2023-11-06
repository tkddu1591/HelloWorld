package com.example.helloworld.transform.company;

import com.example.helloworld.dto.company.CompanyEducationDTO;
import com.example.helloworld.entity.company.CompanyEducationEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CompanyEducationTransform {
    CompanyEducationEntity toEntity(CompanyEducationDTO dto);
    CompanyEducationDTO toDTO(CompanyEducationEntity entity);
}
