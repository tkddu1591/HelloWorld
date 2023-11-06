package com.example.helloworld.repository.company;

import com.example.helloworld.entity.company.CompanyApplyEntity;
import com.example.helloworld.entity.company.CompanyTechnologyStackEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyTechnologyStackRepository extends JpaRepository<CompanyTechnologyStackEntity, Integer> {
}
