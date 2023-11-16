package com.example.helloworld.controller.codingtest;

import com.example.helloworld.dto.codingtest.CodingTestQnaDTO;
import com.example.helloworld.entity.codingtest.CodingTestQnaEntity;
import com.example.helloworld.service.codingtest.CodingTestService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@Log4j2
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
public class CodingTestQnaController {


    private final CodingTestService service;

    @GetMapping("/codingTest/qna")
    @CrossOrigin("http://localhost:3000")
    public List<CodingTestQnaEntity> qna(){
        List<CodingTestQnaEntity> data = service.qnaList();
        log.info(data);
        return data;
    }

    @PostMapping("/codingTest/write")
    public void saveQna(CodingTestQnaDTO qna,
                        HttpServletRequest req
                    ){
        LocalDateTime toDate = LocalDateTime.now();
        qna.setRegDate(toDate);
        qna.setRegIp(req.getRemoteAddr());
        qna.setDelete(false);
        log.info(qna);
        service.qnaSave(qna);



    }



}
