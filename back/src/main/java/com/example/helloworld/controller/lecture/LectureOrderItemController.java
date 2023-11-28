package com.example.helloworld.controller.lecture;

import com.example.helloworld.dto.lecture.LectureDTO;
import com.example.helloworld.dto.lecture.LectureOrderItemDTO;
import com.example.helloworld.service.lecture.LectureOrderItemService;
import com.example.helloworld.service.lecture.LectureService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/lecture/orderItem")
@RequiredArgsConstructor
@Slf4j
public class LectureOrderItemController {
    private final LectureOrderItemService lectureOrderItemService;
    private final LectureService lectureService;
    @PostMapping("")
    public void save(@RequestParam int ordNo, @RequestBody LectureOrderItemDTO lectureOrderItemDTO) {
        lectureOrderItemDTO.setOrdNo(ordNo);
        log.info(ordNo +"");
        lectureOrderItemService.save(lectureOrderItemDTO);
        lectureService.updateByLectureNoOnSold(lectureOrderItemDTO.getLectureNo(), lectureOrderItemDTO.getCount());
    }
    @GetMapping("/buy")
    public int buyLectureByUidAndLectureNo(@RequestParam int lectureNo, @RequestParam String uid) {
        return lectureOrderItemService.buyLectureByUidAndLectureNo(lectureNo, uid);
    }
}
