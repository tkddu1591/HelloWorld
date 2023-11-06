package com.example.helloworld.dto.commuity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommunityDTO {
    private int communityNo;
    private String title;
    private String content;
    private int cateNo;
    private int studyNo;
    private int fileNo;
    private int hasTag;
    private LocalDateTime regDate;
    private String regIp;
    private boolean isDelete;
    private int like;
    private int dislike;
    private int comAmount;
    private String thumb;
}
