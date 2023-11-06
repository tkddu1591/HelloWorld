package com.example.helloworld.transform.company;

import com.example.helloworld.dto.company.CompanyPositionDTO;
import com.example.helloworld.entity.company.CompanyPositionEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CompanyPositionTransform {
    CompanyPositionEntity toEntity(CompanyPositionDTO dto);
    CompanyPositionEntity toDTO(CompanyPositionEntity entity);
}
