package com.example.helloworld.dto.member;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class MemberLectureContentDTO {
    int lectureIHeardNo;
    int contentNo;
    String uid;
    int lectureNo;
}
