package com.example.helloworld.entity.terms;

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
@Table(name = "terms_check")
public class TermsCheckEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int termsCheckNo;
    @ManyToOne
    @JoinColumn(name = "uid")
    private MemberEntity member;

    private String termsCheck;
    private String privacyCheck;
    private String locationCheck;
    private String financeCheck;
    private String taxCheck;
    private LocalDateTime applyDate;

}
