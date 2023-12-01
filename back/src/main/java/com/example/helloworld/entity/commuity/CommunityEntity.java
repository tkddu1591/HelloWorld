package com.example.helloworld.entity.commuity;

import com.example.helloworld.entity.member.MemberEntity;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import jdk.jfr.Category;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "community")
public class CommunityEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int communityNo;
    private String title;
    private String content;
    @ManyToOne
    @JoinColumn(name = "cateNo")
    private CommunityCategoryEntity cate;
    @ManyToOne
    @JoinColumn(name = "studyNo")
    private CommunityStudyEntity study;
    @ManyToOne
    @JoinColumn(name = "fileNo")
    private CommunityFileEntity file;
    @ManyToOne
    @JoinColumn(name = "uid")
    private MemberEntity member;
    private LocalDateTime regDate;
    private String regIp;
    private boolean isDelete;
    private int likes;
    private int dislike;
    private int comAmount;
    private String thumb;
    private int hit;
}
