package com.example.helloworld.entity.commuity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "community_file")
public class CommunityFileEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int fileNo;
    @ManyToOne
    @JoinColumn(name = "communityNo")
    private CommunityEntity community;
    private String file;
}
