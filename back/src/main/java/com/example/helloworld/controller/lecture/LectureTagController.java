package com.example.helloworld.controller.lecture;

import com.example.helloworld.dto.lecture.LectureTagDTO;
import com.example.helloworld.service.lecture.LectureTagService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/lecture")
public class LectureTagController {

    private final LectureTagService tagService;
    @GetMapping("/tags")
    public List<LectureTagDTO> tagDTOS() {
        return tagService.findAll();
    }
}
