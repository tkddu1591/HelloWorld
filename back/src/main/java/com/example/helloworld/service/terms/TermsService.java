package com.example.helloworld.service.terms;

import com.example.helloworld.dto.terms.TermsDTO;
import com.example.helloworld.entity.terms.TermsEntity;
import com.example.helloworld.repository.terms.TermsRepository;
import com.example.helloworld.transform.terms.TermsTransform;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Log4j2
@RequiredArgsConstructor
@Service
public class TermsService {

    private final TermsRepository termsRepository;
    private final TermsTransform  termsTransform;

    public TermsDTO getFailedMessage() {
        String failedMsg = "정보를 가져오는데 실패했습니다.";
        return TermsDTO.builder()
                .termsNo(403)
                .terms(failedMsg)
                .finance(failedMsg)
                .tax(failedMsg)
                .location(failedMsg)
                .privacy(failedMsg)
                .build();
    }

    public boolean isTerms(List<TermsEntity> terms) {
        return (terms != null) && !terms.isEmpty();
    }

    public List<TermsDTO> getTerms() {
        log.info("getTerms start!");
        List<TermsDTO> terms = new ArrayList<>();
        List<TermsEntity> termsEntities = termsRepository.findAll();
        if(isTerms(termsEntities)) terms = termsTransform.toDTOList(termsEntities);
        if(!isTerms(termsEntities)) terms.add(getFailedMessage());
        return terms;
    }
}
