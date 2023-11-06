package com.example.helloworld.dto.codingtest;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CodingTestAnswerDTO {

    private int answerNo;
    private int codingTestNo;
    private String content;
    private String uid;
    private boolean isCorrect;
    private String langName;
    private LocalDateTime regDate;
    private String regIp;
    private boolean isDelete;
    private String etc1;
    private String etc2;
    private String etc3;
    private int etc4;

}
