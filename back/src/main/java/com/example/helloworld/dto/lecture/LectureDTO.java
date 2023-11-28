package com.example.helloworld.dto.lecture;

import com.example.helloworld.entity.lecture.LectureHasTagEntity;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class LectureDTO {
    private int lectureNo;
    private String seller;
    private String title;
    private float score;
    private Integer levelNo;
    private int price;
    private int studyDate;
    private int discount;
    private LocalDateTime regDate ;
    private String regIp;
    private Boolean isDelete ;
    private String content;
    private int hit;
    private int review;
    private int sold;

    //추가데이터
    private List<Integer> tagList;
    private List<String> hasTagNames;
    private String thumbName;
    private String thumbURL;
}
