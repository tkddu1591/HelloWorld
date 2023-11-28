package com.example.helloworld.repository.impl;

import com.example.helloworld.dto.lecture.LectureDTO;
import com.example.helloworld.entity.lecture.LectureEntity;
import com.example.helloworld.entity.lecture.QLectureEntity;
import com.example.helloworld.repository.custom.LectureRepositoryCustom;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.QueryResults;
import com.querydsl.core.types.dsl.ComparableExpressionBase;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Repository;

import org.springframework.data.domain.Pageable;

import java.util.List;

@Repository
@RequiredArgsConstructor
@Slf4j
public class LectureRepositoryImpl implements LectureRepositoryCustom {
    private final JPAQueryFactory queryFactory;

    private ComparableExpressionBase<?> getOrderExpression(QLectureEntity lectureEntity, String sortType) {
        if (sortType == null || sortType.isEmpty()) {
            return Expressions.stringTemplate("''"); // 아무 정렬도 하지 않음
        }

        switch (sortType) {
            case "title":
                return QLectureEntity.lectureEntity.title;
            case "sold":
                return QLectureEntity.lectureEntity.sold;
            case "price":
                return QLectureEntity.lectureEntity.price;
            case "discount":
                return QLectureEntity.lectureEntity.discount;
            case "regDate":
                return QLectureEntity.lectureEntity.regDate;
            default:
                return Expressions.stringTemplate("''"); // 아무 정렬도 하지 않음
        }
    }

    @Override
    public Page<LectureEntity> findBySearch(LectureDTO lectureDTO,
                                            String sortType,
                                            Pageable pageable
    ) {
        QLectureEntity lectureEntity = QLectureEntity.lectureEntity;

        BooleanBuilder builder = new BooleanBuilder();
        // 조건에 따라 필터링
        if (lectureDTO.getSeller() != null) {
            log.info(lectureDTO.getSeller());
            builder.and(lectureEntity.member.uid.eq(lectureDTO.getSeller()));
        }
        if (lectureDTO.getLevelNo() != null && lectureDTO.getLevelNo() != 4) {
            builder.and(lectureEntity.level.levelNo.eq(lectureDTO.getLevelNo()));
        }
        if (lectureDTO.getStudyDate() != 0) {
            builder.and(lectureEntity.studyDate.goe(lectureDTO.getStudyDate()));
        }
        if (lectureDTO.getTitle() != null) {
            builder.and(lectureEntity.title.like("%" + lectureDTO.getTitle() + "%"));
        }
        if (lectureDTO.getTagList() != null && !lectureDTO.getTagList().isEmpty()) {
            builder.and(lectureEntity.hasTags.any().tag.tagNo.in(lectureDTO.getTagList()));
        }
        builder.and(lectureEntity.isDelete.eq(false));

        QueryResults<LectureEntity> results = queryFactory
                .selectFrom(lectureEntity)
                .where(builder)
                .orderBy(sortType != null && !sortType.isEmpty() ? getOrderExpression(lectureEntity, sortType).desc() : null) // 예시로 title을 기준으로 오름차순 정렬
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetchResults();
        return new PageImpl<>(results.getResults(), pageable, results.getTotal());
    }
}
