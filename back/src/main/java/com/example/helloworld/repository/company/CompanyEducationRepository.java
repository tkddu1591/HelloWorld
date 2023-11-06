package com.example.helloworld.repository.company;

import com.example.helloworld.entity.company.CompanyApplyEntity;
import com.example.helloworld.entity.company.CompanyEducationEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyEducationRepository extends JpaRepository<CompanyEducationEntity, Integer> {
}
