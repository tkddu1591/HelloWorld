package com.example.helloworld.service.lecture;

import com.example.helloworld.dto.PageRequestDTO;
import com.example.helloworld.dto.PageResponseDTO;
import com.example.helloworld.dto.lecture.LectureDTO;
import com.example.helloworld.entity.lecture.LectureEntity;
import com.example.helloworld.repository.lecture.LectureRepository;
import com.example.helloworld.transform.lecture.LectureTransform;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class LectureService {
    private final LectureRepository lectureRepository;
    private final LectureTransform lectureTransform;

    public void save(LectureDTO lectureDTO) {
        lectureRepository.save(lectureTransform.toEntity(lectureDTO));
    }

    public int getLastLectureNo(String seller) {
        return lectureRepository.findTopByMember_UidOrderByLectureNoDesc(seller).getLectureNo();
    }

    public LectureDTO findByLectureNo(int lectureNo) {
        LectureEntity lecture = lectureRepository.findByLectureNo(lectureNo);
        return lectureTransform.toDTO(lecture);
    }

    public PageResponseDTO findByCondition(PageRequestDTO pageRequestDTO) {

        //Order By 정렬할 컬럼명 Desc
        //getPageableDesc 내림차순 getPageableAsc 오름차순 ("정렬할 컬럼명")
        //pg , size 가공해서 같이 ordet by랑 섞어줌
        Pageable pageable = pageRequestDTO.getPageableDesc();

        //Page
        Page<LectureEntity> result = null;
        //dtoList
        //findBy머시기 by뒤가 where절이라고 보면 됨니다.
        log.info(pageRequestDTO.toString());
        if (pageRequestDTO.getLecture() != null)
            result = lectureRepository.findBySearch(pageRequestDTO.getLecture()
                    , pageRequestDTO.getSort(),
                    pageable);
        else {
            result = lectureRepository.findByIsDelete(false, pageable);
        }

        result.getContent(); // Entity
        result.getTotalElements(); // 숫자 형이 double -> int변경해줘야함

        // content를 dto로 변환 해주는 역할
        List<LectureDTO> dtoList = (lectureTransform.toDTOList(result.getContent()));


        int totalElement = (int) result.getTotalElements();
        log.info(dtoList.toString());

        return PageResponseDTO.builder()
                .pageRequestDTO(pageRequestDTO)
                .lectureList(dtoList)
                .total(totalElement)
                .build();
    }

    public void updateReviewCount(int lectureNo, int reviewCount) {
        lectureRepository.updateReviewByLectureNo(lectureNo, reviewCount);
    }

    public void updateByLectureNoOnHit(LectureDTO lectureDTO) {
        lectureRepository.updateByLectureNoOnHit(lectureDTO.getLectureNo());
    }

    public void updateByLectureNoOnScore(int lectureNo, float score) {
        lectureRepository.updateByLectureNoOnScore(lectureNo, score);
    }


    public void updateByLectureNoOnSold(int lectureNo, int count) {
        lectureRepository.updateByLectureNoOnSold(lectureNo, count);
    }
}
