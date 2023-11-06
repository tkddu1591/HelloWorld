package com.example.helloworld.entity.terms;


import jakarta.persistence.*;
import lombok.*;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "terms")
public class TermsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int termsNo;
    private String terms;
    private String privacy;
    private String location;
    private String finance;
    private String tax;
}
