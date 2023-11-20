package com.example.helloworld.entity.lecture;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "lecture")
public class LectureEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int lectureNo;
    private String seller;
    private String title;
    @Column(columnDefinition = "int default 0")
    private int score ;
    @ManyToOne
    @JoinColumn(name = "levelNo")
    private LectureLevelEntity level;
    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "thumbURL")
    private LectureThumbEntity thumb;
    private int price;
    @Column(columnDefinition = "int default 0")
    private int studyDate ;
    @Column(columnDefinition = "int default 0")
    private int discount ;

    @CreationTimestamp
    private LocalDateTime regDate;
    private String regIp;
    @Column(columnDefinition = "boolean default false")
    private Boolean isDelete;

    @PrePersist
    public void prePersist() {
        // null인 필드에 대해 디폴트 값을 설정
        if (isDelete == null) {
            isDelete = false; // 또는 원하는 디폴트 값으로 설정
        }
        // 필요한 다른 로직들...
    }
}
