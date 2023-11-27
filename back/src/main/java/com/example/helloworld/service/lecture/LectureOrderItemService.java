package com.example.helloworld.service.lecture;

import com.example.helloworld.dto.lecture.LectureOrderItemDTO;
import com.example.helloworld.repository.lecture.LectureOrderItemRepository;
import com.example.helloworld.transform.lecture.LectureOrderItemTransform;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class LectureOrderItemService {
    private final LectureOrderItemTransform lectureOrderItemTransform;
    private final LectureOrderItemRepository lectureOrderItemRepository;

    public void save(LectureOrderItemDTO lectureOrderItemDTO) {
        lectureOrderItemRepository.save(lectureOrderItemTransform.toEntity(lectureOrderItemDTO));
    }

    public int buyLectureByUidAndLectureNo(int lectureNo, String uid) {
        return lectureOrderItemRepository.countByLecture_LectureNoAndOrder_Member_UidAndOrder_CompleteAndIsCancel(lectureNo, uid, 1, false);
    }
}
