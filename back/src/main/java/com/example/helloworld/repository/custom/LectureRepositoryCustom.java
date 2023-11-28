package com.example.helloworld.repository.custom;

import com.example.helloworld.dto.lecture.LectureDTO;
import com.example.helloworld.entity.lecture.LectureEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface LectureRepositoryCustom {

    Page<LectureEntity> findBySearch(LectureDTO lectureDTO,
                                     String sortType,
                                     Pageable pageable
    );

}
