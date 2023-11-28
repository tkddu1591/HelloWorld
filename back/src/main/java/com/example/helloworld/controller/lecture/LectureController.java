package com.example.helloworld.controller.lecture;

import com.example.helloworld.dto.PageRequestDTO;
import com.example.helloworld.dto.PageResponseDTO;
import com.example.helloworld.dto.lecture.LectureDTO;
import com.example.helloworld.dto.lecture.LectureHasTagDTO;
import com.example.helloworld.service.lecture.LectureHasTagService;
import com.example.helloworld.service.lecture.LectureService;
import com.example.helloworld.service.lecture.LectureThumbService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/lecture")
@RequiredArgsConstructor
@Slf4j
public class LectureController {
    private final LectureHasTagService lectureHasTagService;
    private final LectureService lectureService;
    private final LectureThumbService lectureThumbService;
    @Transactional
    @PostMapping("/write/main")
    public int mainWrite(@RequestBody LectureDTO lectureDTO) {
        log.info(lectureDTO.toString());
        //게시물 저장
        lectureService.save(lectureDTO);
        int lastLectureNo = lectureService.getLastLectureNo(lectureDTO.getSeller());
        lectureDTO.setLectureNo(lastLectureNo);
        //태그 저장
        lectureHasTagService.save(lectureDTO);
        //썸네일 저장
        lectureThumbService.save(lectureDTO);
        return lastLectureNo;
    }

    @Transactional
    @GetMapping("/view")
    public LectureDTO findByLectureNo(@RequestParam int lectureNo) {
        LectureDTO lectureDTO = lectureService.findByLectureNo(lectureNo);
        lectureDTO.setTagList(lectureHasTagService.findByLectureNo(lectureNo).stream().map(LectureHasTagDTO::getTagNo).toList());
        lectureService.updateByLectureNoOnHit(lectureDTO);
        return lectureDTO;
    }

    @GetMapping("/list")
    public PageResponseDTO findByCondition(PageRequestDTO pageRequestDTO){
        log.info("dd");
        return lectureService.findByCondition(pageRequestDTO);
    }

}
