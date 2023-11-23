package com.example.helloworld.entity.lecture;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "lecture_content")
public class LectureContentEntity {
    @Id
    private int contentNo;
    @ManyToOne
    @JoinColumn(name = "partNo")
    private LecturePartEntity part;
    @ManyToOne
    @JoinColumn(name = "lectureNo")
    private LectureEntity lecture;
    private String content;
    private String title;
}

