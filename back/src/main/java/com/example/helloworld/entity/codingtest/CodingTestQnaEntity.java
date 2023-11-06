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
@Table(name = "codingTest_qna")
public class CodingTestQnaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int qnaNo;
    private int codeQanNo;
    @ManyToOne
    @JoinColumn(name = "codingTestNo")
    private CodingTestEntity codingTestEntity;
    @ManyToOne
    @JoinColumn(name = "uid")
    private MemberEntity memberEntity;
    private String title;
    private String content;
    private int comment;
    private int hit;
    private String tagName;
    private LocalDateTime regDate;
    private String regIp;
    private boolean isDelete;
    private String etc1;
    private String etc2;
    private String etc3;
}
