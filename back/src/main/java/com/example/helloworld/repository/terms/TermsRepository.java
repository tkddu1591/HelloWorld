package com.example.helloworld.repository.terms;

import com.example.helloworld.entity.company.CompanyApplyEntity;
import com.example.helloworld.entity.terms.TermsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TermsRepository extends JpaRepository<TermsEntity, Integer> {
}
