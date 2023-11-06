package com.example.helloworld.transform.company;

import com.example.helloworld.dto.company.CompanyDTO;
import com.example.helloworld.entity.company.CompanyEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CompanyTransform {
    public CompanyDTO toDTO(CompanyEntity entity);
    public CompanyEntity toEntity(CompanyDTO dto);
}
