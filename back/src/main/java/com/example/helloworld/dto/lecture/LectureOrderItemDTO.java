package com.example.helloworld.dto.lecture;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class LectureOrderItemDTO {
    private int orderItemNo;
    private int ordNo;
    private int lectureNo;
    private int count;
    private int price;
    private int discount;
    private int point;
    private int total;
    private Boolean isCancel;

}
