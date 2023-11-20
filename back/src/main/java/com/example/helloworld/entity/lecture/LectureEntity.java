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
@Table(name = "lecture")
public class LectureEntity {
    @Id
    private int lectureNo;
    private String seller;
    private String title;
    private int score;
    @ManyToOne
    @JoinColumn(name = "levelNo")
    private LectureLevelEntity level;
    private int price;
    private String language;
    private int studyDate;
    private int discount;
    private LocalDateTime regDate;
    private String regIp;
    private Boolean isDelete;
}
