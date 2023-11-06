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
@Table(name = "codingTest_Answer")
public class CodingTestAnswerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int answerNo;
    @ManyToOne
    @JoinColumn(name = "codingTestNo")
    private CodingTestEntity codingTest;
    private String content;
    @ManyToOne
    @JoinColumn(name = "uid")
    private MemberEntity member;
    private boolean isCorrect;
    private String langName;
    private LocalDateTime regDate;
    private String regIp;
    private boolean isDelete;
    private String etc1;
    private String etc2;
    private String etc3;
    private int etc4;

}
