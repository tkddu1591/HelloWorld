package com.example.helloworld.entity.commuity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "community_tag")
public class CommunityTagEntity {
    @Id
    private int tagNo;
    private String tagName;
}
