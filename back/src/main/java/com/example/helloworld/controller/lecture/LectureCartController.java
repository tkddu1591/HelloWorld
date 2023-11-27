package com.example.helloworld.controller.lecture;

import com.example.helloworld.dto.lecture.LectureCartDTO;
import com.example.helloworld.dto.member.MemberDTO;
import com.example.helloworld.service.lecture.LectureCartService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/lecture/cart")
@RequiredArgsConstructor
@Slf4j
public class LectureCartController {
    private final LectureCartService lectureCartService;

    @GetMapping(value = {"/count"})
    public int cartCount(LectureCartDTO lectureCartDTO) {
        return lectureCartService.countByUidAndLectureNo(lectureCartDTO);
    }
    @GetMapping("")
    public List<LectureCartDTO> cart(MemberDTO memberDTO) {
        return lectureCartService.findByUidAndLectureNo(memberDTO);
    }

    @PostMapping("")
    public void add(@RequestBody LectureCartDTO lectureCartDTO) {
        log.info(lectureCartDTO.toString());
        lectureCartService.save(lectureCartDTO);
    }
    @DeleteMapping("")
    public void deleteByCartNo(int cartNo) {
        lectureCartService.deleteByCartNo(cartNo);
    }
    @DeleteMapping("/uid")
    public void deleteByUid(String uid) {
        log.info(uid);
        lectureCartService.deleteByUid(uid);
    }
}
