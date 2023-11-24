package com.example.helloworld.controller.lecture;

import com.example.helloworld.dto.lecture.LectureContentDTO;
import com.example.helloworld.dto.lecture.LecturePartDTO;
import com.example.helloworld.service.lecture.LecturePartService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lecture/part")
@RequiredArgsConstructor
@Slf4j
public class LecturePartController {
    private final LecturePartService lecturePartService;
    @PostMapping(value = {"","/"})
    public void part(@RequestBody List<LecturePartDTO> lecturePartDTOList) {
        log.info(lecturePartDTOList.toString());
        lecturePartService.changeLectureParts(lecturePartDTOList);
    }
    @GetMapping("/list")
    public List<LecturePartDTO> list(@RequestParam int lectureNo) {
        return lecturePartService.selectByLectureNo(lectureNo);
    }

}
