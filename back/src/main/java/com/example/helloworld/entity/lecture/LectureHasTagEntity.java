package com.example.helloworld.entity.lecture;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "lecture_hasTag")
public class LectureHasTagEntity {
    @Id
    private int hasTagNo;
    @ManyToOne
    @JoinColumn(name = "tagNo")
    private LectureTagEntity tag;
    @ManyToOne
    @JoinColumn(name = "lectureNo")
    private LectureEntity lecture;
}
