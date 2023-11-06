package com.example.helloworld.dto.company;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CompanyApplyDTO {
    private int applyNo;
    private int companyNo;
    private String member;
}
