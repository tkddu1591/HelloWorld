package com.example.helloworld.service.lecture;

import com.example.helloworld.dto.lecture.LectureOrderDTO;
import com.example.helloworld.entity.lecture.LectureOrderEntity;
import com.example.helloworld.repository.lecture.LectureOrderRepository;
import com.example.helloworld.transform.lecture.LectureOrderTransform;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
@Slf4j
public class LectureOrderService {
    private final LectureOrderRepository lectureOrderRepository;
    private final LectureOrderTransform lectureOrderTransform;
    public void save(LectureOrderDTO lectureOrderDTO) {
        LectureOrderEntity lectureOrderEntity = lectureOrderTransform.toEntity(lectureOrderDTO);
        lectureOrderRepository.save(lectureOrderEntity);
    }

    public LectureOrderDTO getLastOrder(String uid) {
        LectureOrderEntity lectureOrderEntity = lectureOrderRepository.findTopByMember_UidOrderByOrdNoDesc(uid);
        return lectureOrderTransform.toDTO(lectureOrderEntity);
    }

}
