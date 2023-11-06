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
@Table(name = "codingTest_tag")
public class CodingTestTagEntity {
    @Id
    private String tagName;
    @ManyToOne
    @JoinColumn(name = "codingTestNo")
    private CodingTestEntity codingTest;
    @ManyToOne
    @JoinColumn(name = "uid")
    private MemberEntity member;
    private LocalDateTime regDate;
    private String regIp;
    private boolean isDelete;

}
