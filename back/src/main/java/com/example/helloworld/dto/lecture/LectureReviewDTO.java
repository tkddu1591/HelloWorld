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
public class LectureReviewDTO {
    private int reviewNo;
    private int lectureNo;
    private String title;
    private String uid;
    private String content;
    private int score;
    private LocalDateTime regDate;
    private String regIp;
    private Boolean isDelete;
    //추가 데이터
    private String nick;
}
