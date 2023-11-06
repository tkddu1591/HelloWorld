package com.example.helloworld.transform.company;

import com.example.helloworld.dto.company.CompanyTechnologyStackDTO;
import com.example.helloworld.entity.company.CompanyTechnologyStackEntity;

public interface CompanyTechnologyStackTransform {
    CompanyTechnologyStackEntity toEntity(CompanyTechnologyStackDTO dto);
    CompanyTechnologyStackDTO toDTO(CompanyTechnologyStackEntity entity);
}
