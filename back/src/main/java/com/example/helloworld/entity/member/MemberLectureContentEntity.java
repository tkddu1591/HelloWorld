package com.example.helloworld.entity.member;

import com.example.helloworld.entity.lecture.LectureContentEntity;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "member_lecture_content")
public class MemberLectureContentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int lectureIHeardNo;
    @ManyToOne
    @JoinColumn(name = "lectureContentNo")
    private LectureContentEntity lectureContent;
    @ManyToOne
    @JoinColumn(name = "uid")
    private MemberEntity member;


}
