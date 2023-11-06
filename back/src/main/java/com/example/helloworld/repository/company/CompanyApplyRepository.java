package com.example.helloworld.repository.company;

import com.example.helloworld.entity.commuity.CommunityCategoryEntity;
import com.example.helloworld.entity.company.CompanyApplyEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyApplyRepository extends JpaRepository<CompanyApplyEntity, Integer> {
}
