package com.example.helloworld.dto.lecture;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class LectureContentDTO {
    private int lectureNo;
    private int partNo;
    private int contentNo;
    private String content;
    private String title;
}
