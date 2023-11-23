package com.example.helloworld.entity.lecture;

import jakarta.persistence.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@Table(name = "lecture_hasTag")
public class LectureHasTagEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int hasTagNo;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tagNo")
    private LectureTagEntity tag;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "lectureNo")
    private LectureEntity lecture;
}
