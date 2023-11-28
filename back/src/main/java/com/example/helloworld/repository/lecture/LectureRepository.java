package com.example.helloworld.repository.lecture;

import com.example.helloworld.entity.lecture.LectureEntity;
import com.example.helloworld.repository.custom.LectureRepositoryCustom;
import jakarta.transaction.Transactional;
import org.apache.ibatis.annotations.Param;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;


public interface LectureRepository extends JpaRepository<LectureEntity, Integer>, LectureRepositoryCustom {
    LectureEntity findTopByMember_UidOrderByLectureNoDesc(String seller);

    LectureEntity findByLectureNo(int lectureNo);

    Page<LectureEntity> findByIsDelete(boolean b, Pageable pageable);

    @Modifying
    @Query("UPDATE LectureEntity l SET l.review = :review WHERE l.lectureNo = :lectureNo")
    void updateReviewByLectureNo(@Param("lectureNo") int lectureNo, @Param("review") int review);
    @Modifying
    @Query("UPDATE LectureEntity l SET l.score = :score WHERE l.lectureNo = :lectureNo")
    void updateByLectureNoOnScore(@Param("lectureNo") int lectureNo, @Param("score") float score);
    @Modifying
    @Query("UPDATE LectureEntity l SET l.hit = l.hit+1 WHERE l.lectureNo = :lectureNo")
    void updateByLectureNoOnHit(@Param("lectureNo") int lectureNo);
    @Modifying
    @Query("UPDATE LectureEntity l SET l.sold = l.sold+:count WHERE l.lectureNo = :lectureNo")
    @Transactional
    void updateByLectureNoOnSold(@Param("lectureNo") int lectureNo, @Param("count") int count);
}