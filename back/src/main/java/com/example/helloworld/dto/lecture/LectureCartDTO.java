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
public class LectureCartDTO {
    private int cartNo;
    private String uid;
    private int lectureNo;
    private String title;
    private int count;
    private int price;
    private int discount;
    private int point;
    private int total;
    private LocalDateTime regDate;
}
