package com.example.helloworld.dto.codingtest;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CodingTestDTO {
    private int codingTestNo;
    private String uid;
    private String title;
    private String content;
    private int level;
    private String language;
    private LocalDateTime regDate;
    private String regIp;
    private int complete;
    private int answer;
    private int answerPresent;
    private boolean isDelete;
    private String limit;
    private String inputText;
    private String outputText;
    private String etc1;
    private String etc2;
}
