package com.example.helloworld.entity.company;

import com.example.helloworld.entity.member.MemberEntity;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "company")
public class CompanyEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int companyNo;
    @ManyToOne
    @JoinColumn(name = "manager")
    private MemberEntity member;
    private int career;
    private int pay;
    @ManyToOne
    @JoinColumn(name = "educationNo")
    private CompanyEducationEntity education;
    @ManyToOne
    @JoinColumn(name = "workTypeNo")
    private CompanyWorkTypeEntity workType;
    private String content;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private int personnel;
    private LocalDateTime regDate;
    private String regIp;
    private boolean isDelete;
}
