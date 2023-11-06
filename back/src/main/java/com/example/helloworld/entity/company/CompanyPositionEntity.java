package com.example.helloworld.entity.company;

import com.example.helloworld.entity.commuity.CommunityEntity;
import jakarta.persistence.*;
import lombok.*;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "company_postion")
public class CompanyPositionEntity {
    @Id
    private String position;
    @ManyToOne
    @JoinColumn(name = "companyNo")
    private CompanyEntity company;
}
