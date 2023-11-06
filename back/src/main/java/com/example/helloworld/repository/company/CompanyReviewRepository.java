package com.example.helloworld.repository.company;

import com.example.helloworld.entity.company.CompanyApplyEntity;
import com.example.helloworld.entity.company.CompanyReviewEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyReviewRepository extends JpaRepository<CompanyReviewEntity, Integer> {
}
