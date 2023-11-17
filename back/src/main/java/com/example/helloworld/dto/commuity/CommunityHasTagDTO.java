package com.example.helloworld.dto.commuity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CommunityHasTagDTO {
    private int hasTagNo;
    private int tagNo;
    private int communityNo;

    // 추가 정보
    private String tagName;

}
