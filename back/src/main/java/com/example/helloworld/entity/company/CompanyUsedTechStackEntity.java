package com.example.helloworld.entity.company;

import jakarta.persistence.*;
import lombok.*;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "company_usedTechStack")
public class CompanyUsedTechStackEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int usedTechStackNo;

    @ManyToOne
    @JoinColumn(name = "techStackNo")
    private CompanyTechStackEntity techStack;

    @ManyToOne
    @JoinColumn(name = "companyNo")
    private CompanyEntity company;
}
