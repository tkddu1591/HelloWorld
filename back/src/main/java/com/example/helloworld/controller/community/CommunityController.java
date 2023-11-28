package com.example.helloworld.controller.community;


import com.example.helloworld.dto.PageRequestDTO;
import com.example.helloworld.dto.PageResponseDTO;
import com.example.helloworld.dto.commuity.CommunityCommentDTO;
import com.example.helloworld.dto.commuity.CommunityDTO;
import com.example.helloworld.entity.commuity.CommunityEntity;
import com.example.helloworld.service.service.CommunityService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.transaction.Transactional;
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

    @GetMapping("/view")
    public PageResponseDTO view(int communityNo, int cateNo, PageRequestDTO pageRequestDTO, HttpServletRequest request, HttpServletResponse response){

        log.info("view...here");

        return communityService.findByCommunityNo(communityNo, cateNo, pageRequestDTO, request, response);
    }


    @GetMapping("/comment")
    public PageResponseDTO comments(@ModelAttribute PageRequestDTO pageRequest, int communityNo, String commentType){

        PageResponseDTO result = communityService.commentRefresh(pageRequest, communityNo, commentType);
        log.info("CommentRefresh");

        return result;
    }


    @Transactional
    @PostMapping("/insertComment")
    public PageResponseDTO insertComment(@RequestBody PageRequestDTO pageRequestDTO){

        log.info("uid: "+ pageRequestDTO.getUid());

        communityService.insertComment(pageRequestDTO);

        PageResponseDTO result = communityService.commentRefresh(pageRequestDTO, pageRequestDTO.getCommunityNo(), pageRequestDTO.getCommentType());

        log.info(result.getCommentsList());

        return result;
    }

    @PostMapping("/deleteComment")
    public PageResponseDTO deleteComment(@RequestBody PageRequestDTO pageRequestDTO){

        log.info("delete");
        log.info("commentNo : "+pageRequestDTO.getCommentNo());
        communityService.deleteComment(pageRequestDTO.getCommentNo());

        log.info("delete completed");
        return communityService.commentRefresh(pageRequestDTO, pageRequestDTO.getCommunityNo(), pageRequestDTO.getCommentType());
    }

    @PostMapping("/register")
    public CommunityDTO register(@RequestBody CommunityDTO communityDTO){

        CommunityEntity entity = null;

        log.info(communityDTO.toString());
        log.info("register");

        communityService.register(communityDTO);

        return null;
    }


}
