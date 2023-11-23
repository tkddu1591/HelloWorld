package com.example.helloworld.repository.member;

import com.example.helloworld.entity.member.TokenEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TokenRepository extends JpaRepository<TokenEntity, String> {
}
