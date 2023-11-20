package com.example.helloworld.service.lecture;

import com.example.helloworld.dto.lecture.LectureDTO;
import com.example.helloworld.repository.lecture.LectureRepository;
import com.example.helloworld.transform.lecture.LectureTransform;
import groovy.util.logging.Slf4j;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class LectureService {
    private final LectureRepository lectureRepository;
    private final LectureTransform lectureTransform;
    public void save(LectureDTO lectureDTO) {
        lectureRepository.save(lectureTransform.toEntity(lectureDTO));
    }
    public int getLastLectureNo(String seller){
        return lectureRepository.findTopBySellerOrderByLectureNoDesc(seller).getLectureNo();
    }
}
