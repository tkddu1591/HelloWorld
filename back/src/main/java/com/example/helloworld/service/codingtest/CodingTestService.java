package com.example.helloworld.service.codingtest;

import com.example.helloworld.dto.codingtest.CodingTestDTO;
import com.example.helloworld.dto.codingtest.CodingTestQnaDTO;
import com.example.helloworld.dto.codingtest.PageRequestDTO;
import com.example.helloworld.dto.codingtest.PageResponseDTO;
import com.example.helloworld.entity.codingtest.CodingTestEntity;
import com.example.helloworld.entity.codingtest.CodingTestQnaEntity;
import com.example.helloworld.repository.codingtest.CodingTestQnaRepository;
import com.example.helloworld.repository.codingtest.CodingTestRepository;
import com.example.helloworld.transform.codingtest.CodingTestQnaTransform;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
@Log4j2
public class CodingTestService {

    private final CodingTestQnaRepository qnarepo;
    private final CodingTestRepository repo;
    private final CodingTestQnaTransform ct;
    private final ModelMapper modelMapper;

    //qna
    public List<CodingTestQnaEntity> qnaList(){

        return qnarepo.findAll();
    }

    public void qnaSave(CodingTestQnaDTO qna){
       CodingTestQnaEntity reqna=ct.toEntity(qna);
        log.info(reqna);
        qnarepo.save(reqna);
    }

    //problem

    public List<CodingTestEntity> problemList(){
        return repo.findAll();
    }

    public PageResponseDTO problemList(PageRequestDTO pageRequestDTO){

        Pageable pageable= pageRequestDTO.getPageable("codingTestNo");

        Page<CodingTestEntity> result = repo.findAll(pageable);

        List<CodingTestDTO> dtoList = result.getContent()
                .stream()
                .map(e->modelMapper.map(e, CodingTestDTO.class))
                .toList();

        int totalElement =(int) result.getTotalElements();


        return PageResponseDTO.builder()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(dtoList)
                .total(totalElement)
                .build();
    }


}
