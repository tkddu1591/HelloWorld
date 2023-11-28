package com.example.helloworld.repository.commuity;

import com.example.helloworld.dto.PageResponseDTO;
import com.example.helloworld.entity.commuity.CommunityCategoryEntity;
import com.example.helloworld.entity.commuity.CommunityEntity;
import org.apache.ibatis.annotations.Param;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CommunityRepository extends JpaRepository<CommunityEntity, Integer> {

    public CommunityEntity findByCommunityNo(int i);

    @Modifying
    @Query("UPDATE CommunityEntity c SET c.hit = c.hit + 1 WHERE c.communityNo = :communityNo")
    void addHitCount(@Param("communityNo") int communityNo);

    @Modifying
    @Query("UPDATE CommunityEntity e SET e.comAmount = e.comAmount + 1 WHERE e.communityNo = :communityNo")
    void updateComAmountByCommunityNo(@Param("communityNo") int communityNo);

    @Query("SELECT c.communityNo FROM CommunityEntity c WHERE c.cate.cateNo = :cateNo AND c.communityNo < :communityNo ORDER BY c.communityNo DESC LIMIT 1")
    public String findPrevNo(@Param("cateNo") int cateNo, @Param("communityNo") int communityNo);

    @Query("SELECT c.communityNo FROM CommunityEntity c WHERE c.cate.cateNo = :cateNo AND c.communityNo > :communityNo ORDER BY c.communityNo ASC LIMIT 1")
    public String  findNextNo(@Param("cateNo") int cateNo, @Param("communityNo") int communityNo);


    public Page<CommunityEntity> findByCate_CateNo(int cateNo, Pageable pageable);

}
