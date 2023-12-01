package com.example.helloworld.controller.lecture;
import com.example.helloworld.dto.lecture.LectureContentDTO;
import com.example.helloworld.entity.lecture.LectureContentEntity;
import com.example.helloworld.service.lecture.LectureContentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/lecture/content")
@RequiredArgsConstructor
public class LectureContentController {
    private final LectureContentService lectureContentService;
    @PostMapping("/list")
    public void content(@RequestBody List<LectureContentDTO> lectureContentDTOList) {
        List<LectureContentDTO> contentDTOS = lectureContentService.selectByLectureNo(lectureContentDTOList.get(0).getLectureNo());
        lectureContentService.changeLectureContents(lectureContentDTOList,contentDTOS);
    }
    @PostMapping(value = {"","/"})
    public void write(@RequestBody LectureContentDTO lectureContentDTO) {
        log.info(lectureContentDTO.toString());
        lectureContentService.save(lectureContentDTO);
    }
    @GetMapping(value = {"","/"})
    public LectureContentDTO findOne(@RequestParam int contentNo, String title) {
        log.info(contentNo + " " + title);
        return lectureContentService.findByContentNo(contentNo, title);
    }
    @DeleteMapping("/list")
    public void delete(@RequestParam int partNo) {
        lectureContentService.deleteByPartNo(partNo);
    }

    @GetMapping("/list")
    public List<LectureContentDTO> listByLecture(@RequestParam int lectureNo) {
        return lectureContentService.selectByLectureNo(lectureNo);
    }
    @GetMapping("/listByPart")
    public List<LectureContentDTO> listByPart(@RequestParam int partNo) {
        return lectureContentService.selectByPartNo(partNo);
    }
    @GetMapping("/countByLecture")
    public int countByLecture(@RequestParam int lectureNo) {
        return lectureContentService.countByLectureNo(lectureNo);
    }

}
