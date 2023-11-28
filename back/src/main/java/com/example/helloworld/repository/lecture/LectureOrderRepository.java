package com.example.helloworld.repository.lecture;

import com.example.helloworld.dto.lecture.LectureOrderDTO;
import com.example.helloworld.entity.lecture.LectureCartEntity;
import com.example.helloworld.entity.lecture.LectureOrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LectureOrderRepository extends JpaRepository<LectureOrderEntity, Integer> {
    LectureOrderEntity findTopByMember_UidOrderByOrdNoDesc(String uid);

}
