package com.example.helloworld.repository.company;


import com.example.helloworld.entity.company.CompanyApplyEntity;
import com.example.helloworld.entity.company.CompanyTechnologyStackUseEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyTechnologyStackUseRepository extends JpaRepository<CompanyTechnologyStackUseEntity, Integer> {
}
