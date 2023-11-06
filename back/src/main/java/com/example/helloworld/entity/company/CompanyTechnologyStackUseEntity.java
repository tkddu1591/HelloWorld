package com.example.helloworld.entity.company;

import jakarta.persistence.*;
import lombok.*;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "commuity_study_member")
public class CompanyTechnologyStackUseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int TechnologyStackUseNo;
    @ManyToOne
    @JoinColumn(name = "technologyStackNo")
    private CompanyTechnologyStackEntity TechnologyStack;
    @ManyToOne
    @JoinColumn(name = "companyNo")
    private CompanyEntity Company;
}
