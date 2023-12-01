package com.example.helloworld.transform.company;

import com.example.helloworld.dto.company.CompanyTechStackDTO;
import com.example.helloworld.entity.company.CompanyTechStackEntity;

public interface CompanyTechStackTransform {
    CompanyTechStackEntity toEntity(CompanyTechStackDTO dto);
    CompanyTechStackDTO toDTO(CompanyTechStackEntity entity);
}
