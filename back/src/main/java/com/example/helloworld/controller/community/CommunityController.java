package com.example.helloworld.controller.community;


import com.example.helloworld.dto.PageRequestDTO;
import com.example.helloworld.dto.PageResponseDTO;
import com.example.helloworld.service.service.CommunityService;
import lombok.extern.log4j.Log4j2;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Log4j2
@RequestMapping("/community")
public class CommunityController {


    @Autowired
    private CommunityService communityService;

    @GetMapping("/list")
    public PageResponseDTO list( PageRequestDTO pageRequestDTO){
        log.info("List");
        log.info(pageRequestDTO);
        PageResponseDTO result = communityService.findCommunityByType(pageRequestDTO);
        log.info("here..1 : " +result);
        return result;
    }
}
