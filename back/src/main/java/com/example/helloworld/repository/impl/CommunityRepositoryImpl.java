package com.example.helloworld.repository.impl;

import com.example.helloworld.dto.commuity.CommunityDTO;
import com.example.helloworld.entity.commuity.CommunityEntity;
import com.example.helloworld.entity.commuity.QCommunityEntity;
import com.example.helloworld.repository.custom.CommunityRepositoryCustom;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.QueryResults;
import com.querydsl.core.types.dsl.ComparableExpressionBase;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
@Slf4j
public class CommunityRepositoryImpl implements CommunityRepositoryCustom {
    private final JPAQueryFactory queryFactory;

    private ComparableExpressionBase<?> getOrderExpression(QCommunityEntity communityEntity, String sortType) {
        if (sortType == null || sortType.isEmpty()) {
            return Expressions.stringTemplate("''"); // 아무 정렬도 하지 않음
        }

        switch (sortType) {
            case "communityNo":
                return QCommunityEntity.communityEntity.title;
            case "comAmount":
                return QCommunityEntity.communityEntity.comAmount;
            case "likes":
                return QCommunityEntity.communityEntity.likes;
            default:
                return Expressions.stringTemplate("''"); // 아무 정렬도 하지 않음
        }
    }

    @Override
    public Page<CommunityEntity> findBySearch(CommunityDTO communityDTO,
                                              String sortType,
                                              String sortTag,
                                              Pageable pageable
    ) {
        QCommunityEntity communityEntity = QCommunityEntity.communityEntity;

        BooleanBuilder builder = new BooleanBuilder();
        // 조건에 따라 필터링
        if (sortTag == "uid") {
            builder.and(communityEntity.member.uid.eq(communityDTO.getUid()));
        }
        if (sortTag == "title") {
            builder.and(communityEntity.title.eq(communityDTO.getTitle()));
        }
        if (sortTag == "titleAndContent") {
            builder.and(communityEntity.title.eq(communityDTO.getTitle()));
            builder.and(communityEntity.content.eq(communityDTO.getContent()));
        }
        if (sortTag ==" 'content'") {
            builder.and(communityEntity.content.eq(communityDTO.getContent()));
        }

        QueryResults<CommunityEntity> results = queryFactory
                .selectFrom(communityEntity)
                .where(builder)
                .orderBy(sortType != null && !sortType.isEmpty() ? getOrderExpression(communityEntity, sortType).desc() : null) // 예시로 title을 기준으로 오름차순 정렬
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetchResults();
        return new PageImpl<>(results.getResults(), pageable, results.getTotal());
    }
}
