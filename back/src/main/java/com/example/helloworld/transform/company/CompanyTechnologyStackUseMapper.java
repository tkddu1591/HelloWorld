package com.example.helloworld.transform.company;


import com.example.helloworld.dto.company.CompanyTechnologyStackUseDTO;
import com.example.helloworld.entity.company.CompanyTechnologyStackUseEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CompanyTechnologyStackUseMapper {
    public CompanyTechnologyStackUseDTO toDTO(CompanyTechnologyStackUseEntity entity);
    public CompanyTechnologyStackUseEntity toEntity(CompanyTechnologyStackUseDTO dto);
}
