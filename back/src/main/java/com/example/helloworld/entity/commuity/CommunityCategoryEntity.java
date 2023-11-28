package com.example.helloworld.entity.commuity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "community_category")
public class CommunityCategoryEntity {
    @Id
    private int cateNo;
    private String boardName;
}
