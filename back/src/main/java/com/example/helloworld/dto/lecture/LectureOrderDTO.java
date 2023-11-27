package com.example.helloworld.dto.lecture;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class LectureOrderDTO {
    private int ordNo;
    private String uid;
    private String name;
    private String email;
    private int count;
    private int price;
    private int discount;
    private int savePoint;
    private int usedPoint;
    private int totalPrice;
    private String hp;
    private int payment;
    private int complete;
    private LocalDateTime ordDate;
    private String etc;
}
