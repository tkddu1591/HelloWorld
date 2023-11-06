package com.example.helloworld.transform.company;

import com.example.helloworld.dto.company.CompanyApplyDTO;
import com.example.helloworld.entity.company.CompanyApplyEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CompanyApplyTransform {
    @Mapping(target = "company.companyNo", source = "companyNo")
    @Mapping(target = "member.uid", source = "member")
    CompanyApplyEntity toEntity(CompanyApplyDTO dto);
    @Mapping(source= "company.companyNo",target = "companyNo")
    @Mapping(source= "member.uid",target = "member")
    CompanyApplyDTO toDTO(CompanyApplyEntity entity);
}
