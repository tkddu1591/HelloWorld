package com.example.helloworld.service.lecture;

import com.example.helloworld.dto.lecture.LectureDTO;
import com.example.helloworld.dto.lecture.LectureThumbDTO;
import com.example.helloworld.repository.lecture.LectureThumbRepository;
import com.example.helloworld.transform.lecture.LectureThumbTransform;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LectureThumbService {
    private final LectureThumbRepository lectureThumbRepository;
    private final LectureThumbTransform lectureThumbTransform;

    public void save(LectureDTO lectureDTO) {
        LectureThumbDTO lectureThumbDTO = new LectureThumbDTO();
        lectureThumbDTO.setThumbName(lectureDTO.getThumbName());
        lectureThumbDTO.setThumbURL(lectureDTO.getThumbURL());
        lectureThumbRepository.save(lectureThumbTransform.toEntity(lectureThumbDTO));
    }
}
