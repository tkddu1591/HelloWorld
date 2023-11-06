package com.example.helloworld.entity.company;

import com.example.helloworld.entity.member.MemberEntity;
import jakarta.persistence.*;
import lombok.*;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "company_review")
public class CompanyReviewEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int reviewNo;
    private String reviewContent;
    @ManyToOne
    @JoinColumn(name = "reviewer")
    private MemberEntity member;
    @ManyToOne
    @JoinColumn(name = "companyNo")
    private CompanyEntity company;
}
