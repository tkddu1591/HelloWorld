package com.example.helloworld.repository.company;


import com.example.helloworld.entity.company.CompanyApplyEntity;
import com.example.helloworld.entity.company.CompanyWorkTypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyWorkTypeRepository extends JpaRepository<CompanyWorkTypeEntity, Integer> {
}
