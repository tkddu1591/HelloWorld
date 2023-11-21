package com.example.helloworld.controller.lecture;
import com.example.helloworld.dto.lecture.LectureContentDTO;
import com.example.helloworld.service.lecture.LectureContentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/lecture/write/content")
@RequiredArgsConstructor
public class LectureContentController {
    private final LectureContentService lectureContentService;
    @PostMapping("/list")
    public void content(@RequestBody List<LectureContentDTO> lectureContentDTOList) {
        lectureContentService.changeLectureContents(lectureContentDTOList);
    }
    @PostMapping("/one")
    public void write(@RequestBody LectureContentDTO lectureContentDTO) {
        log.info(lectureContentDTO.toString());
        lectureContentService.save(lectureContentDTO);
    }
    @DeleteMapping("/list")
    public void delete(@RequestParam int partNo) {
        lectureContentService.deleteByPartNo(partNo);
    }

}
