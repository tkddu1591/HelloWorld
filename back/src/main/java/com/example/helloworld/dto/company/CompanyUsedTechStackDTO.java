package com.example.helloworld.dto.company;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CompanyUsedTechStackDTO {
    private int TechStackUseNo;
    private int TechStackNo;
    private int companyNo;
}
