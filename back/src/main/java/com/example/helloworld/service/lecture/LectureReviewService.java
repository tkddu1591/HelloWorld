package com.example.helloworld.service.lecture;

import com.example.helloworld.dto.PageRequestDTO;
import com.example.helloworld.dto.PageResponseDTO;
import com.example.helloworld.dto.lecture.LectureReviewDTO;
import com.example.helloworld.entity.lecture.LectureReviewEntity;
import com.example.helloworld.repository.lecture.LectureReviewRepository;
import com.example.helloworld.transform.lecture.LectureReviewTransform;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class LectureReviewService {
    private final LectureReviewRepository lectureReviewRepository;
    private final LectureReviewTransform lectureReviewTransform;

    public void save(LectureReviewDTO lectureReviewDTO) {
        lectureReviewRepository.save(lectureReviewTransform.toEntity(lectureReviewDTO));
    }

    public int findReviewCount(LectureReviewDTO lectureReviewDTO) {
        return lectureReviewRepository.countByLecture_LectureNo(lectureReviewDTO.getLectureNo());
    }

    public PageResponseDTO findByLectureNo(PageRequestDTO pageRequestDTO) {
        //카테고리 10~ 1000까지 cate1, 카테고리 1000~ cate2 10 이하는 존재하지 않음
        //tpye값으로 정렬 처리

        //Order By 정렬할 컬럼명 Desc
        //getPageableDesc 내림차순 getPageableAsc 오름차순 ("정렬할 컬럼명")
        //pg , size 가공해서 같이 ordet by랑 섞어줌
        Pageable pageable = pageRequestDTO.getPageableDesc();


        //Page
        Page<LectureReviewEntity> result = null;
        //dtoList
        //findBy머시기 by뒤가 where절이라고 보면 됨니다.
        result = lectureReviewRepository.findByLecture_LectureNoAndIsDelete(pageRequestDTO.getLectureNo(), pageable, false);

        result.getContent(); // Entity
        result.getTotalElements(); // 숫자 형이 double -> int변경해줘야함

        // content를 dto로 변환 해주는 역할
        List<LectureReviewDTO> dtoList = result.getContent()
                .stream()
                .map(lectureReviewTransform::toDTO)
                .toList();


        int totalElement = (int) result.getTotalElements();
        return PageResponseDTO.builder()
                .pageRequestDTO(pageRequestDTO)
                .lectureReviewList(dtoList)
                .total(totalElement)
                .build();
    }

    public int star1ByLectureNo(int lectureNo, int score) {
        return lectureReviewRepository.countByLecture_LectureNoAndScoreAndIsDelete(lectureNo, score, false);
    }

    public float averageByLectureNo(int lectureNo) {
        return lectureReviewRepository.averageByLecture_LectureNo(lectureNo);
    }

    public void update(LectureReviewDTO lectureReviewDTO) {
        lectureReviewRepository.updateByReviewNoOnContent(lectureReviewDTO.getReviewNo(), lectureReviewDTO.getContent(), lectureReviewDTO.getScore(), lectureReviewDTO.getTitle());
    }

    public void delete(LectureReviewDTO lectureReviewDTO) {
        lectureReviewRepository.deleteByReviewNo(lectureReviewDTO.getReviewNo());
    }
}
