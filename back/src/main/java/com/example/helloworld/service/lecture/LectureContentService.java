package com.example.helloworld.service.lecture;

import com.example.helloworld.dto.lecture.LectureContentDTO;
import com.example.helloworld.repository.lecture.LectureContentRepository;
import com.example.helloworld.repository.lecture.LectureContentRepository;
import com.example.helloworld.transform.lecture.LectureContentTransform;
import com.example.helloworld.transform.lecture.LectureContentTransform;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class LectureContentService {
    private final LectureContentRepository lectureContentRepository;
    private final LectureContentTransform lectureContentTransform;

    @Transactional
    public void changeLectureContents(List<LectureContentDTO> LectureContentDTOS) {
        int lastNo = 0;
        int nextNo = 0;
        for (LectureContentDTO LectureContentDTO : LectureContentDTOS) {
            lectureContentRepository.save(lectureContentTransform.toEntity(LectureContentDTO));
            lastNo = LectureContentDTO.getContentNo();
        }
        nextNo = (lastNo / 100 + 1) * 100;
        if (lectureContentRepository.countByContentNoBetween(lastNo + 1, nextNo) > 0)
            lectureContentRepository.deleteByContentNoBetween(lastNo + 1, nextNo);
    }
    public void deleteBetween(int start, int end){
        lectureContentRepository.deleteByPart_PartNoBetween(start, end);
    }
    @Transactional
    public void deleteByPartNo(int partNo){
        lectureContentRepository.deleteByPart_PartNo(partNo);
    }

    @Transactional
    public void save(LectureContentDTO lectureContentDTO){
        lectureContentRepository.save(lectureContentTransform.toEntity(lectureContentDTO));
    }

}
