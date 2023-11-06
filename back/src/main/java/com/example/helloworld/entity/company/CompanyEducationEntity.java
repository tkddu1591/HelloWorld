package com.example.helloworld.entity.company;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "company_education")
public class CompanyEducationEntity {
    @Id
    private int educationNo;
    private String education;
}
