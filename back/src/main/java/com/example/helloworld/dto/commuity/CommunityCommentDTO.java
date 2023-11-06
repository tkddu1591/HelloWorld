package com.example.helloworld.dto.commuity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommunityCommentDTO {
    private int commentNo;
    private String memberUid;
    private int parentNo;
    private int communityNo;
    private String content;
}
