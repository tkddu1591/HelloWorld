package com.example.helloworld.dto.lecture;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class LectureDTO {
    private int lectureNo;
    private String seller;
    private String title;
    private int score;
    private int levelNo;
    private int price;
    private String language;
    private int studyDate;
    private int discount;
    private LocalDateTime regDate;
    private String regIp;
    private Boolean isDelete;
}
