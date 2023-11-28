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
    private LectureOrderEntity order;
    @ManyToOne
    @JoinColumn(name = "lectureNo")
    private LectureEntity lecture;
    private int count;
    private int price;
    private int discount;
    private int point;
    private int total;
    private Boolean isCancel;
    @PrePersist
    public void prePersist() {
        // null인 필드에 대해 디폴트 값을 설정
        if (isCancel == null) {
            isCancel = false; // 또는 원하는 디폴트 값으로 설정
        }
        // 필요한 다른 로직들...
    }

}
