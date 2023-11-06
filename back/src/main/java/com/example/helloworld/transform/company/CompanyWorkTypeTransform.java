package com.example.helloworld.transform.company;


import com.example.helloworld.dto.company.CompanyWorkTypeDTO;
import com.example.helloworld.entity.company.CompanyWorkTypeEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CompanyWorkTypeTransform {
    public CompanyWorkTypeDTO toDTO(CompanyWorkTypeEntity entity);
    public CompanyWorkTypeEntity toEntity(CompanyWorkTypeDTO dto);
}
