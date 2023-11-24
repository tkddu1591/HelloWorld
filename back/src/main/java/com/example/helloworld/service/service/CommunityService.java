package com.example.helloworld.service.service;

import com.example.helloworld.dto.PageRequestDTO;
import com.example.helloworld.dto.PageResponseDTO;
import com.example.helloworld.dto.commuity.CommunityCommentDTO;
import com.example.helloworld.dto.commuity.CommunityDTO;
import com.example.helloworld.dto.commuity.CommunityHasTagDTO;
import com.example.helloworld.entity.commuity.CommunityCategoryEntity;
import com.example.helloworld.entity.commuity.CommunityCommentEntity;
import com.example.helloworld.entity.commuity.CommunityEntity;
import com.example.helloworld.entity.commuity.CommunityHasTagEntity;
import com.example.helloworld.entity.member.MemberEntity;
import com.example.helloworld.mapper.commuity.CommunityMapper;
import com.example.helloworld.repository.commuity.CommunityCategoryRepository;
import com.example.helloworld.repository.commuity.CommunityCommentRepository;
import com.example.helloworld.repository.commuity.CommunityHasTagRepository;
import com.example.helloworld.repository.commuity.CommunityRepository;
import com.example.helloworld.transform.commuity.CommunityCommentTransform;
import com.example.helloworld.transform.commuity.CommunityHasTagTransform;
import com.example.helloworld.transform.commuity.CommunityTransform;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Log4j2
@RequiredArgsConstructor
@Service
public class CommunityService {

    private final CommunityRepository communityRepository;
    private final CommunityCommentRepository communityCommentRepository;
    private final CommunityCategoryRepository categoryRepository;
    private final CommunityHasTagRepository hasTagRepository;
    private final CommunityTransform communityTransform;
    private final CommunityCommentTransform communityCommentTransform;
    private final CommunityHasTagTransform hasTagTransform;

    Pageable pageable;


    public PageResponseDTO findCommunityByType(PageRequestDTO pageRequestDTO) {


        //카테고리 10~ 1000까지 cate1, 카테고리 1000~ cate2 10 이하는 존재하지 않음
        //tpye값으로 정렬 처리

        //Order By 정렬할 컬럼명 Desc
        //getPageableDesc 내림차순 getPageableAsc 오름차순 ("정렬할 컬럼명")
        //pg , size 가공해서 같이 ordet by랑 섞어줌

        Pageable pageable = pageRequestDTO.getPageableDesc();


        CommunityCategoryEntity categoryEntity = categoryRepository.findById(pageRequestDTO.getCateNo()).orElse(null);


        //Page
        Page<CommunityEntity> result = null;
        //dtoList
        //findBy머시기 by뒤가 where절이라고 보면 됨니다.
        if (pageRequestDTO.getCateNo() != 0) {
            result = communityRepository.findByCate_CateNo(pageRequestDTO.getCateNo(), pageable);
        }


        // content를 dto로 변환 해주는 역할
        List<CommunityDTO> dtoList = result.getContent()
                .stream()
                .map(communityTransform::toDTO)
                .toList();


        int totalElement = (int) result.getTotalElements();

        return PageResponseDTO.builder()
                .pageRequestDTO(pageRequestDTO)
                .communityList(dtoList)
                .sort(pageRequestDTO.getSort())
                .total(totalElement)
                .build();
    }

    public PageResponseDTO findByCommunityNo(int communityNo, int cateNo, PageRequestDTO pageRequestDTO) {
        pageRequestDTO.setSize(20);
        pageRequestDTO.setSort("commentNo");
        Pageable pageable = pageRequestDTO.getPageableAsc();

        log.info("view Service...1");
        CommunityEntity viewEntity = communityRepository.findByCommunityNo(communityNo);
        log.info("cateNo: "+ pageRequestDTO.getCateNo());
        log.info("view Service...1.1");

        String  prevNo = communityRepository.findPrevNo(cateNo, communityNo);
        String  nextNo = communityRepository.findNextNo(cateNo, communityNo);
        if(prevNo == null){
            prevNo="0";
        }
        if(nextNo == null){
            nextNo="0";
        }
        log.info(pageable);
        Page<CommunityCommentEntity> commentEntity = communityCommentRepository.findByCommunity_CommunityNo(communityNo, pageable);
        log.info("view : " + viewEntity);
        List<CommunityHasTagEntity> hasTagEntity = hasTagRepository.findByCommunity_CommunityNo(communityNo);
        log.info("view Service...2");

        //Page
        //dtoList
        //findBy머시기 by뒤가 where절이라고 보면 됨니다.

        // content를 dto로 변환 해주는 역할
        List<CommunityCommentDTO> commentDTOList = commentEntity.getContent()
                .stream()
                .map(communityCommentTransform::toDTO)
                .toList();
        log.info("view Service...3");
        CommunityDTO viewDTO = communityTransform.toDTO(viewEntity);
        log.info("view Service...4");
        List<CommunityHasTagDTO> hasTagDTO = hasTagEntity.stream().map(hasTagTransform::toDTO).toList();
        log.info(hasTagDTO.toString());

        int totalElement = (int) commentEntity.getTotalElements();
        log.info("view Service...5");

        return PageResponseDTO.builder()
                .pageRequestDTO(pageRequestDTO)
                .commentsList(commentDTOList)
                .view(viewDTO)
                .hasTagsList(hasTagDTO)
                .prevNo(Integer.parseInt(prevNo))
                .nextNo(Integer.parseInt(nextNo))
                .total(totalElement)
                .build();
    }

    /*public PageResponseDTO findCommentsByCommunityNo(){

    }*/

    public PageResponseDTO commentRefresh(PageRequestDTO pageRequestDTO, int communityNo, String commentType){
        pageRequestDTO.setSize(20);
        pageRequestDTO.setSort("commentNo");
        Pageable pageable = null;
        if(commentType.equals("Desc")){
            pageable = pageRequestDTO.getPageableDesc();
        }else if(commentType.equals("Asc")){
            pageable = pageRequestDTO.getPageableAsc();
        }

        Page<CommunityCommentEntity> commentEntity = communityCommentRepository.findByCommunity_CommunityNo(communityNo, pageable);

        // content를 dto로 변환 해주는 역할
        List<CommunityCommentDTO> commentDTOList = commentEntity.getContent()
                .stream()
                .map(communityCommentTransform::toDTO)
                .toList();

        int totalElement = (int) commentEntity.getTotalElements();



        return PageResponseDTO.builder()
                .pageRequestDTO(pageRequestDTO)
                .commentsList(commentDTOList)
                .total(totalElement)
                .build();
    }

    @Transactional
    public void insertComment(PageRequestDTO pageRequestDTO){

        CommunityCommentEntity entity = new CommunityCommentEntity();
        entity.setContent(pageRequestDTO.getCommentWrite());
        CommunityEntity community = communityRepository.findByCommunityNo(pageRequestDTO.getCommunityNo());
        entity.setCommunity(community);
        entity.setParentNo(pageRequestDTO.getParentNo());
        MemberEntity member = new MemberEntity();
        member.setUid(pageRequestDTO.getUid());
        entity.setMember(member);
        communityCommentRepository.save(entity);
        log.info(pageRequestDTO.getCommunityNo());
        communityRepository.updateComAmountByCommunityNo(pageRequestDTO.getCommunityNo());

    }

    public void deleteComment(int commentNo){

        log.info("delete service...1");
        log.info("commentNo: " + commentNo);
        communityCommentRepository.updateByCommentNo(commentNo);
        log.info("delete service...2");
    }
}
