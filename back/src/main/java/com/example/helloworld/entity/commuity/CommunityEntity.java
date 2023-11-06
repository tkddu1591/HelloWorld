package com.example.helloworld.entity.commuity;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Getter
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
    private int cateNo;
    @ManyToOne
    @JoinColumn(name = "studyNo")
    private CommunityStudyEntity study;
    @ManyToOne
    @JoinColumn(name = "fileNo")
    private CommunityFileEntity file;
    @ManyToOne
    @JoinColumn(name = "hasTagNo")
    private CommunityHasTagEntity hasTag;
    private LocalDateTime regDate;
    private String regIp;
    private boolean isDelete;
    private int likes;
    private int dislike;
    private int comAmount;
    private String thumb;
}
