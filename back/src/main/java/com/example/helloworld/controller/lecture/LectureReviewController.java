package com.example.helloworld.controller.lecture;

import com.example.helloworld.dto.PageRequestDTO;
import com.example.helloworld.dto.PageResponseDTO;
import com.example.helloworld.dto.lecture.LectureReviewDTO;
import com.example.helloworld.service.lecture.LectureReviewService;
import com.example.helloworld.service.lecture.LectureService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lecture/review")
@RequiredArgsConstructor
@Slf4j
public class LectureReviewController {
    private final LectureReviewService lectureReviewService;
    private final LectureService lectureService;
    @Transactional
    @PostMapping(value = {"","/"})
    public void review(@RequestBody LectureReviewDTO lectureReviewDTO) {
        lectureReviewService.save(lectureReviewDTO);
        log.info(lectureReviewDTO.toString());
        int reviewCount = lectureReviewService.findReviewCount(lectureReviewDTO);
        float score = lectureReviewService.averageByLectureNo(lectureReviewDTO.getLectureNo());
        lectureService.updateByLectureNoOnScore(lectureReviewDTO.getLectureNo(), score);
        lectureService.updateReviewCount(lectureReviewDTO.getLectureNo(), reviewCount);
    }
    @Transactional
    @GetMapping("/list")
    public PageResponseDTO listByLectureNo(PageRequestDTO pageRequestDTO){
        log.info(pageRequestDTO.toString());
        return lectureReviewService.findByLectureNo(pageRequestDTO);
    }
    @Transactional
    @GetMapping("/scoreCount")
    public int star1ByLectureNo(@RequestParam int lectureNo,@RequestParam int score){
        log.info(lectureNo+" "+score);
        return lectureReviewService.star1ByLectureNo(lectureNo, score);
    }
}
