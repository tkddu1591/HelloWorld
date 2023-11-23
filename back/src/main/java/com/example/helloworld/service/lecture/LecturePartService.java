package com.example.helloworld.service.lecture;

import com.example.helloworld.dto.lecture.LecturePartDTO;
import com.example.helloworld.repository.lecture.LecturePartRepository;
import com.example.helloworld.transform.lecture.LectureContentTransform;
import com.example.helloworld.transform.lecture.LecturePartTransform;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class LecturePartService {
    private final LecturePartRepository lecturePartRepository;
    private final LecturePartTransform lecturePartTransform;
    private final LectureContentService lectureContentService;

    @Transactional
    public void changeLectureParts(List<LecturePartDTO> lecturePartDTOS) {
        int lastNo = 0;
        int nextNo = 0;
        for (LecturePartDTO lecturePartDTO : lecturePartDTOS) {
            lecturePartRepository.save(lecturePartTransform.toEntity(lecturePartDTO));
            lastNo = lecturePartDTO.getPartNo();
        }
        nextNo = (lastNo / 100 + 1) * 100;
        log.info(lecturePartRepository.countByPartNoBetween(lastNo + 1, nextNo) + "");
        if (lecturePartRepository.countByPartNoBetween(lastNo + 1, nextNo) > 0) {
            lectureContentService.deleteBetween(lastNo + 1, nextNo);
            lecturePartRepository.deleteByPartNoBetween(lastNo + 1, nextNo);
        }
    }

    @Transactional
    public List<LecturePartDTO> selectByLectureNo(int lectureNo) {
        return lecturePartRepository.findByLecture_LectureNo(lectureNo).stream().map(lecturePartTransform::toDTO).toList();
    }
}
