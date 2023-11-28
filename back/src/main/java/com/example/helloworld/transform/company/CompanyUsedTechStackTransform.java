package com.example.helloworld.transform.company;


import com.example.helloworld.dto.company.CompanyUsedTechStackDTO;
import com.example.helloworld.entity.company.CompanyUsedTechStackEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CompanyUsedTechStackTransform {
    public CompanyUsedTechStackDTO toDTO(CompanyUsedTechStackEntity entity);
    public CompanyUsedTechStackEntity toEntity(CompanyUsedTechStackDTO dto);
}
