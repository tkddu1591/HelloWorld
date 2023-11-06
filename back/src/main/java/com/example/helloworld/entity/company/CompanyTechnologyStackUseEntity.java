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
    private int technologyStackUseNo;
    @ManyToOne
    @JoinColumn(name = "technologyStackNo")
    private CompanyTechnologyStackEntity technologyStack;
    @ManyToOne
    @JoinColumn(name = "companyNo")
    private CompanyEntity company;
}
