package com.example.helloworld.service.lecture;

import com.example.helloworld.dto.lecture.LectureDTO;
import com.example.helloworld.dto.lecture.LectureHasTagDTO;
import com.example.helloworld.dto.lecture.LectureTagDTO;
import com.example.helloworld.repository.lecture.LectureHasTagRepository;
import com.example.helloworld.transform.lecture.LectureHasTagTransform;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;

@Log4j2
@Service
@RequiredArgsConstructor
public class LectureHasTagService {
    private final LectureHasTagRepository lectureHasTagRepository;
    private final LectureHasTagTransform lectureHasTagTransform;

    public void save(LectureDTO lectureDTO) {
        for (int tagNo : lectureDTO.getTagList()) {
            LectureHasTagDTO lectureHasTagDTO = new LectureHasTagDTO(); // 객체 생성 및 초기화
            lectureHasTagDTO.setLectureNo(lectureDTO.getLectureNo());
            lectureHasTagDTO.setTagNo(tagNo);
            lectureHasTagRepository.save(lectureHasTagTransform.toEntity(lectureHasTagDTO));
        }
    }
    public List<LectureHasTagDTO> findByLectureNo(int lectureNo) {
        lectureHasTagRepository.deleteByLecture_LectureNo(lectureNo);
        return lectureHasTagRepository.findByLecture_LectureNo(lectureNo).stream().map(lectureHasTagTransform::toDTO).toList();
    }

}
