package com.example.helloworld.repository.lecture;

import com.example.helloworld.entity.lecture.LectureCartEntity;
import com.example.helloworld.entity.lecture.LectureReviewEntity;
import jakarta.transaction.Transactional;
import org.apache.ibatis.annotations.Param;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.core.parameters.P;

import java.util.List;

public interface LectureReviewRepository extends JpaRepository<LectureReviewEntity, Integer> {

    int countByLecture_LectureNo(int lectureNo);

    Page<LectureReviewEntity> findByLecture_LectureNoAndIsDelete(int lectureNo, Pageable pageable, Boolean isDelete);

    int countByLecture_LectureNoAndScoreAndIsDelete(int lectureNo, int score, Boolean isDelete);

    @Query("SELECT avg(l.score) from LectureReviewEntity l WHERE l.lecture.lectureNo = :lectureNo")
    float averageByLecture_LectureNo(@Param("lectureNo") int lectureNo);

    @Modifying
    @Query("UPDATE LectureReviewEntity l SET l.content = :content,l.title = :title, l.score = :score WHERE l.reviewNo = :reviewNo")
    @Transactional
    void updateByReviewNoOnContent(@Param("reviewNo") int reviewNo, @Param("content") String content, @Param("score") int score, @Param("title") String title);

    void deleteByReviewNo(int reviewNo);
}
