package com.example.helloworld.dto.commuity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommunityStudyDTO {
    private int studyNo;
    private int communityNo;
    private String master;
    private int maxMember;
    private int nowMember;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private LocalDateTime recruitEnd;
}
