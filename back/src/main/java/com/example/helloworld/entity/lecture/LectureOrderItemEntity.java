package com.example.helloworld.entity.lecture;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.apache.ibatis.annotations.Many;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "lecture_order_item")
public class LectureOrderItemEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderItemNo;
    @ManyToOne
    @JoinColumn(name = "ordNo")
    private LectureOrderEntity ord;
    @ManyToOne
    @JoinColumn(name = "lectureNo")
    private LectureEntity lecture;
    private int count;
    private int price;
    private int discount;
    private int point;
    private int total;
    private Boolean isCancel;

}
