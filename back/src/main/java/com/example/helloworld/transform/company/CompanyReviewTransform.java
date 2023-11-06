package com.example.helloworld.transform.company;

import com.example.helloworld.dto.company.CompanyReviewDTO;
import com.example.helloworld.entity.company.CompanyReviewEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CompanyReviewTransform {
    CompanyReviewEntity toEntity(CompanyReviewDTO dto);
    CompanyReviewDTO toDTO(CompanyReviewEntity entity);
}
