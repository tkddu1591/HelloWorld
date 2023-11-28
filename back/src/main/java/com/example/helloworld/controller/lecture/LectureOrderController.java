package com.example.helloworld.controller.lecture;

import com.example.helloworld.dto.lecture.LectureOrderDTO;
import com.example.helloworld.service.lecture.LectureOrderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/lecture/order")
@Slf4j
@RequiredArgsConstructor
public class LectureOrderController {
    private final LectureOrderService lectureOrderService;
    @PostMapping("")
    public void save(@RequestBody LectureOrderDTO lectureOrderDTO) {
        lectureOrderService.save(lectureOrderDTO);
    }
    @GetMapping("/last")
    public LectureOrderDTO getLastOrder(String uid){
        return lectureOrderService.getLastOrder(uid);
    }
}
