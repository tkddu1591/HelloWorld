package com.example.helloworld.repository.company;

import com.example.helloworld.entity.company.CompanyApplyEntity;
import com.example.helloworld.entity.company.CompanyEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<CompanyEntity, Integer> {
}
