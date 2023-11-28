package com.example.helloworld.entity.lecture;

import com.example.helloworld.entity.member.MemberEntity;
import jakarta.persistence.*;
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
@Table(name = "lecture_review")
public class LectureReviewEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int reviewNo;
    @ManyToOne
    @JoinColumn(name = "lectureNo")
    private LectureEntity lecture;
    @ManyToOne
    @JoinColumn(name = "uid")
    private MemberEntity member;
    private String title;
    private String content;
    private int score;
    @CreationTimestamp
    private LocalDateTime regDate;
    private String regIp;
    private Boolean isDelete;
    @PrePersist
    public void prePersist() {
        // null인 필드에 대해 디폴트 값을 설정
        if (isDelete == null) {
            isDelete = false; // 또는 원하는 디폴트 값으로 설정
        }
        // 필요한 다른 로직들...
    }
}
