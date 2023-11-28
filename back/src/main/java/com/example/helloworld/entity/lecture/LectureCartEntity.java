package com.example.helloworld.entity.lecture;

import com.example.helloworld.entity.member.MemberEntity;
import jakarta.persistence.*;
import jdk.jfr.Timestamp;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "lecture_cart")
public class LectureCartEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cartNo;
    @ManyToOne
    @JoinColumn(name = "uid")
    private MemberEntity member;
    @ManyToOne
    @JoinColumn(name = "lectureNo")
    private LectureEntity lecture;
    private int count;
    private int price;
    private int discount;
    private int point;
    private int total;
    @CreationTimestamp
    private LocalDateTime regDate;
}
