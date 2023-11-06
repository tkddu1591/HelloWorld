package com.example.helloworld.entity.company;

import jakarta.persistence.*;
import lombok.*;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "commuity_image")
public class CompanyImageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int imageNo;
    @ManyToOne
    @JoinColumn(name = "companyNo")
    private CompanyEntity company;
    private String image;
}
