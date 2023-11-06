package com.example.helloworld.entity.codingtest;

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
@Table(name = "codingTest")
public class CodingTestEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int codingTestNo;
    @ManyToOne
    @JoinColumn(name = "uid")
    private MemberEntity member;
    private String title;
    private String content;
    private int level;
    private String language;
    private LocalDateTime regDate;
    private String regIp;
    private int complete;
    private int answer;
    private int answerPresent;
    private boolean isDelete;
    private String limit;
    private String inputText;
    private String outputText;
    private String etc1;
    private String etc2;
}
