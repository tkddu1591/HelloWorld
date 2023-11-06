package com.example.helloworld.dto.commuity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommunityImageDTO {
    private int imgNo;
    private int communityNo;
    private String image;
}
