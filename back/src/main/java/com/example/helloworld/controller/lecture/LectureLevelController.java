package com.example.helloworld.controller.lecture;

import com.example.helloworld.dto.lecture.LectureLevelDTO;
import com.example.helloworld.service.lecture.LectureLevelService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/lecture")
public class LectureLevelController {

    private final LectureLevelService LevelService;
    @GetMapping("/levels")
    public List<LectureLevelDTO> LevelDTOS() {
        return LevelService.findAll();
    }
}
