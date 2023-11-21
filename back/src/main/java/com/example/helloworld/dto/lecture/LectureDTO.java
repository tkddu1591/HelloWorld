package com.example.helloworld.dto.lecture;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@ToString
public class LectureDTO {
    private int lectureNo;
    private String seller;
    private String title;
    private int score;
    private int levelNo;
    private int price;
    private int studyDate;
    private int discount;
    private LocalDateTime regDate ;
    private String regIp;
    private Boolean isDelete ;

    //추가데이터
    private List<Integer> tagList;
    private String thumbName;
    private String thumbURL;
}
