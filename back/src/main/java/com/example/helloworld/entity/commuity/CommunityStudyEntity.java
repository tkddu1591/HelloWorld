package com.example.helloworld.entity.commuity;

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
@Table(name = "community_study")
public class CommunityStudyEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int studyNo;
    @ManyToOne
    @JoinColumn(name = "communityNo")
    private CommunityEntity community;
    @ManyToOne
    @JoinColumn(name = "master")
    private MemberEntity member;
    private int maxMember;
    private int nowMember;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private LocalDateTime recruitEnd;
}
