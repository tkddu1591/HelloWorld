package com.example.helloworld.controller.member;

import com.example.helloworld.dto.member.MemberLectureContentDTO;
import com.example.helloworld.entity.member.MemberLectureContentEntity;
import com.example.helloworld.service.member.MemberLectureContentService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("/api/member/lecture/content")
@RequiredArgsConstructor
public class MemberLectureContentController {
    private final MemberLectureContentService memberLectureContentService;

    @PostMapping("")
    public void save(@RequestBody MemberLectureContentDTO memberLectureContentDTO) {
        memberLectureContentService.save(memberLectureContentDTO);
    }
    @GetMapping("/list")
    public List<MemberLectureContentDTO> list( MemberLectureContentDTO memberLectureContentDTO){
        log.info(memberLectureContentDTO.toString());
        List<MemberLectureContentDTO> memberLectureContentEntityList =memberLectureContentService.list(memberLectureContentDTO);
        log.info(memberLectureContentEntityList.toString());
        return memberLectureContentEntityList;
    }

}
