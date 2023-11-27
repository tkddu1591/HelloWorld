package com.example.helloworld.repository.lecture;

import com.example.helloworld.entity.lecture.LectureCartEntity;
import com.example.helloworld.entity.lecture.LectureOrderItemEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LectureOrderItemRepository extends JpaRepository<LectureOrderItemEntity, Integer> {
    int countByLecture_LectureNoAndOrder_Member_UidAndOrder_CompleteAndIsCancel(int lectureNo, String uid, int complete, boolean isCancel);
}
