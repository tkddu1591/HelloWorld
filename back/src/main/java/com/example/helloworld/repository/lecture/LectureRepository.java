package com.example.helloworld.repository.lecture;

import com.example.helloworld.entity.lecture.LectureEntity;
import com.example.helloworld.repository.custom.LectureRepositoryCustom;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


public interface LectureRepository extends JpaRepository<LectureEntity, Integer>, LectureRepositoryCustom {
    LectureEntity findTopBySellerOrderByLectureNoDesc(String seller);

    LectureEntity findByLectureNo(int lectureNo);

    Page<LectureEntity> findByIsDelete(boolean b, Pageable pageable);
}