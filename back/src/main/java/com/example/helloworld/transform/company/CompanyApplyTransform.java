package com.example.helloworld.transform.company;

import com.example.helloworld.dto.company.CompanyApplyDTO;
import com.example.helloworld.entity.company.CompanyApplyEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CompanyApplyTransform {
    CompanyApplyEntity toEntity(CompanyApplyDTO dto);
    CompanyApplyDTO toDTO(CompanyApplyEntity entity);
}
