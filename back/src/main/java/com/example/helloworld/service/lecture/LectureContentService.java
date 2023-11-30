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
import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class LectureContentService {
    private final LectureContentRepository lectureContentRepository;
    private final LectureContentTransform lectureContentTransform;

    @Transactional
    public LectureContentDTO findByContentNo(int contentNo, String title) {
        int lastNo = contentNo+1;
        int firstNo = (lastNo / 100) * 100;

        log.info(firstNo + " " + lastNo);
        return lectureContentTransform.toDTO(lectureContentRepository.findByTitleAndContentNoBetween(title, firstNo, lastNo));
    }

    @Transactional
    public void changeLectureContents(List<LectureContentDTO> newDTOS, List<LectureContentDTO> oldDTOS) {
        int lastNo = 0;
        int nextNo = 0;
        for (LectureContentDTO oldDTO : oldDTOS) {
            String contentNoToFind = oldDTO.getTitle();

            // oldDTO의 contentNo와 일치하는 newDTO를 찾기
            Optional<LectureContentDTO> matchingNewDTO = newDTOS.stream()
                    .filter(newDTO -> newDTO.getTitle().equals(contentNoToFind))
                    .findFirst();

            // newDTO가 존재하면 데이터 복사
            matchingNewDTO.ifPresent(newDTO -> {
                newDTO.setContent(oldDTO.getContent());
                // 필요한 다른 속성들도 복사할 수 있음
            });
        }
        for (LectureContentDTO LectureContentDTO : newDTOS) {
            lectureContentRepository.save(lectureContentTransform.toEntity(LectureContentDTO));
            lastNo = LectureContentDTO.getContentNo();
        }
        nextNo = (lastNo / 100 + 1) * 100;
        if (lectureContentRepository.countByContentNoBetween(lastNo + 1, nextNo) > 0)
            lectureContentRepository.deleteByContentNoBetween(lastNo + 1, nextNo);
    }

    public void deleteBetween(int start, int end) {
        lectureContentRepository.deleteByPart_PartNoBetween(start, end);
    }

    @Transactional
    public void deleteByPartNo(int partNo) {
        lectureContentRepository.deleteByPart_PartNo(partNo);
    }

    @Transactional
    public void save(LectureContentDTO lectureContentDTO) {
        lectureContentRepository.save(lectureContentTransform.toEntity(lectureContentDTO));
    }

    @Transactional
    public List<LectureContentDTO> selectByLectureNo(int lectureNo) {
        return lectureContentRepository.findByLecture_LectureNo(lectureNo).stream().map(lectureContentTransform::toDTO).toList();
    }

    public List<LectureContentDTO> selectByPartNo(int partNo) {
        return lectureContentRepository.findByPart_PartNo(partNo).stream().map(lectureContentTransform::toDTO).toList();
    }

    public int countByLectureNo(int lectureNo) {
        return lectureContentRepository.countByLecture_LectureNo(lectureNo);
    }
}
