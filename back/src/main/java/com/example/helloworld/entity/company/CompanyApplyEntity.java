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
@Table(name = "company_apply")
public class CompanyApplyEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int applyNo;
    @ManyToOne
    @JoinColumn(name = "companyNo")
    private CompanyEntity company;
    @ManyToOne
    @JoinColumn(name = "uid")
    private MemberEntity member;
}
