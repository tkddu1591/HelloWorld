package com.example.helloworld.entity.lecture;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "lecture_review")
public class LectureReviewEntity {
    @Id
    private int reviewNo;
    @ManyToOne
    @JoinColumn(name = "lectureNo")
    private LectureEntity lecture;
    private String title;
    private String content;
    private int score;
    private LocalDateTime regDate;
    private String regIp;
    private Boolean isDelete;
}
