package com.example.helloworld.entity.lecture;

import com.example.helloworld.entity.member.MemberEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "lecture_order")
public class LectureOrderEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ordNo;
    @ManyToOne
    @JoinColumn(name = "uid")
    private MemberEntity member;
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
    @CreationTimestamp
    private LocalDateTime ordDate;
    private String etc;
}
