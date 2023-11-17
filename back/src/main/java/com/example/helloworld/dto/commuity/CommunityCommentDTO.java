package com.example.helloworld.dto.commuity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommunityCommentDTO {
    private int commentNo;
    private String memberUid;
    private int parentNo;
    private int communityNo;
    private String content;
    private LocalDateTime regDate;
    private int isDeleted;

    //추가정보
    private String nick;
    private String profileImg;
}
