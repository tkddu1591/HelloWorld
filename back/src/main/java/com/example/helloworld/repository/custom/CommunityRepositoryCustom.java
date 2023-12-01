package com.example.helloworld.repository.custom;

import com.example.helloworld.dto.commuity.CommunityDTO;
import com.example.helloworld.dto.lecture.LectureDTO;
import com.example.helloworld.entity.commuity.CommunityEntity;
import com.example.helloworld.entity.lecture.LectureEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CommunityRepositoryCustom {


    Page<CommunityEntity> findBySearch(CommunityDTO communityDTO,
                                       String sortType,
                                       String sortTag,
                                       Pageable pageable
    );
}
