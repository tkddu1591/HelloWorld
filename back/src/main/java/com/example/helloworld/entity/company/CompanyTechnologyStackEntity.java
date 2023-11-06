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
@Table(name = "commuity_study_member")
public class CompanyTechnologyStackEntity {
    @Id
    private int technologyStackNo;
    private String technologyStack;
}
