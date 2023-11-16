package com.example.helloworld.service.service;

import com.example.helloworld.dto.PageRequestDTO;
import com.example.helloworld.dto.PageResponseDTO;
import com.example.helloworld.dto.commuity.CommunityDTO;
import com.example.helloworld.entity.commuity.CommunityEntity;
import com.example.helloworld.mapper.commuity.CommunityMapper;
import com.example.helloworld.repository.commuity.CommunityRepository;
import com.example.helloworld.transform.commuity.CommunityTransform;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Log4j2
@Service
public class CommunityService {

    @Autowired
    private CommunityRepository communityRepository;
    @Autowired
    private CommunityTransform communityTransform;

    Pageable pageable;


    public PageResponseDTO findCommunityByType(PageRequestDTO pageRequestDTO) {


        //카테고리 10~ 1000까지 cate1, 카테고리 1000~ cate2 10 이하는 존재하지 않음
        //tpye값으로 정렬 처리

        //Order By 정렬할 컬럼명 Desc
        //getPageableDesc 내림차순 getPageableAsc 오름차순 ("정렬할 컬럼명")
        //pg , size 가공해서 같이 ordet by랑 섞어줌
        Pageable pageable = pageRequestDTO.getPageableDesc("communityNo");


        //Page
        Page<CommunityEntity> result = null;
        //dtoList
        //findBy머시기 by뒤가 where절이라고 보면 됨니다.
        if (pageRequestDTO.getCateNo() != 0)
            result = communityRepository.findByCateNo(pageRequestDTO.getCateNo(), pageable);


        // content를 dto로 변환 해주는 역할
        List<CommunityDTO> dtoList = result.getContent()
                .stream()
                .map(communityTransform::toDTO)
                .toList();


        int totalElement = (int) result.getTotalElements();

        return PageResponseDTO.builder()
                .pageRequestDTO(pageRequestDTO)
                .communityList(dtoList)
                .total(totalElement)
                .build();
    }
}
