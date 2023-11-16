package com.example.helloworld.controller.codingtest;

import com.example.helloworld.dto.codingtest.PageRequestDTO;
import com.example.helloworld.dto.codingtest.PageResponseDTO;
import com.example.helloworld.entity.codingtest.CodingTestEntity;
import com.example.helloworld.service.codingtest.CodingTestService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Log4j2
@RequiredArgsConstructor
@CrossOrigin(origins="*")
public class CodingTestProblemController {

    private final CodingTestService service;
/*
   @GetMapping("/codingTest/problem")
    public PageResponseDTO problemList(PageRequestDTO pageRequestDTO){

       PageResponseDTO data = service.problemList(pageRequestDTO);
       int total =data.getTotal();
       log.info("Total: " + total);
       log.info(data);
       return data;
    }
*/



    @GetMapping("/codingTest/problem")
    public List<CodingTestEntity> problemList(){
        return service.problemList();
    }

}
