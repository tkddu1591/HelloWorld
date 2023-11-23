package com.example.helloworld.dto.lecture;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class LectureThumbDTO {
    private String thumbURL;
    private String thumbName;
}
