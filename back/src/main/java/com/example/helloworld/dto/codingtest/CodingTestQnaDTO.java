package com.example.helloworld.dto.codingtest;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CodingTestQnaDTO {
    private int codeQanNo;
    private int codingTestNo;
    private String uid;
    private int parent;
    private String title;
    private String content;
    private int comment;
    private int hit;
    private String tagName;
    private LocalDateTime regDate;
    private String regIp;
    private boolean isDelete;
    private String etc1;
    private String etc2;
    private String etc3;
}
