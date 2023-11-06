package com.example.helloworld.entity.commuity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "community_hasTag")
public class CommunityHasTagEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int hasTagNo;
    @ManyToOne
    @JoinColumn(name = "tagNo")
    private CommunityTagEntity tag;
    @ManyToOne
    @JoinColumn(name = "communityNo")
    private CommunityEntity community;
}
