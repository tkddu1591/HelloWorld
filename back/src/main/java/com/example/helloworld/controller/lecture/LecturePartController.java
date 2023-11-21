package com.example.helloworld.controller.lecture;

import com.example.helloworld.dto.lecture.LecturePartDTO;
import com.example.helloworld.service.lecture.LecturePartService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/lecture/write/content")
@RequiredArgsConstructor
public class LecturePartController {
    private final LecturePartService lecturePartService;
    @PostMapping("/part")
    public void part(@RequestBody List<LecturePartDTO> lecturePartDTOList) {
        lecturePartService.changeLectureParts(lecturePartDTOList);
    }

}
