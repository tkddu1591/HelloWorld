package com.example.helloworld.repository.commuity;

import com.example.helloworld.dto.PageResponseDTO;
import com.example.helloworld.entity.commuity.CommunityCategoryEntity;
import com.example.helloworld.entity.commuity.CommunityEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommunityRepository extends JpaRepository<CommunityEntity, Integer> {

    public Page<CommunityEntity> findByCateNo(int i, Pageable pageable);

}
