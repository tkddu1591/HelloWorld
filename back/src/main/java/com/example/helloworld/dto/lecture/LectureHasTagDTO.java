package com.example.helloworld.dto.lecture;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class LectureHasTagDTO {
    private int hasTagNo;
    private int tagNo;
    private int lectureNo;
}
