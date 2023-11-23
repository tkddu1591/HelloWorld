package com.example.helloworld.entity.member;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "member_refreshToken")
public class TokenEntity implements Serializable {
    @Id
    private String email;
    private String refreshToken;
}
