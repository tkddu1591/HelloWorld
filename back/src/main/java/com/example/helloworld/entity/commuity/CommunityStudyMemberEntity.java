package com.example.helloworld.entity.commuity;

import com.example.helloworld.entity.member.MemberEntity;
import jakarta.persistence.*;
import lombok.*;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "community_study_member")
public class CommunityStudyMemberEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int studyNo;
    @ManyToOne
    @JoinColumn(name = "uid")
    private MemberEntity member;
}
