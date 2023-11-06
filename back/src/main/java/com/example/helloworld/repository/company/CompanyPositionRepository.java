package com.example.helloworld.repository.company;

import com.example.helloworld.entity.company.CompanyApplyEntity;
import com.example.helloworld.entity.company.CompanyPositionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyPositionRepository extends JpaRepository<CompanyPositionEntity, String> {
}
