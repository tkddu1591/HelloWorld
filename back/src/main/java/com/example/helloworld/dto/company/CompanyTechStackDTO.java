package com.example.helloworld.dto.company;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompanyTechStackDTO {
    private int techStackNo;
    private String techStackName;
}
