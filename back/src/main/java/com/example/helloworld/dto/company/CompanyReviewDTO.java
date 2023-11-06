package com.example.helloworld.dto.company;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CompanyReviewDTO {
    private int reviewNo;
    private String reviewContent;
    private String reviewer;
    private int companyNo;
}
