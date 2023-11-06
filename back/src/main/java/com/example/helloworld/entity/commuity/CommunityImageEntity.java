package com.example.helloworld.entity.commuity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "community_image")
public class CommunityImageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int imgNo;
    @ManyToOne
    @JoinColumn(name = "communityNo")
    private CommunityEntity community;
    private String image;
}
