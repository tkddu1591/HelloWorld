package com.example.helloworld.dto.codingtest;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CodingTestTagDTO {
    private String tagName;
    private int codingTestNo;
    private String uid;
    private LocalDateTime regDate;
    private String regIp;
    private boolean isDelete;

}
