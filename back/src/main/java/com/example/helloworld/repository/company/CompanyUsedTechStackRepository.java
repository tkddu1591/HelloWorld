package com.example.helloworld.repository.company;


import com.example.helloworld.entity.company.CompanyUsedTechStackEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyUsedTechStackRepository extends JpaRepository<CompanyUsedTechStackEntity, Integer> {
}
