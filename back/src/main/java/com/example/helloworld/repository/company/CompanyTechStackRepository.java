package com.example.helloworld.repository.company;

import com.example.helloworld.entity.company.CompanyTechStackEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyTechStackRepository extends JpaRepository<CompanyTechStackEntity, Integer> {
}
