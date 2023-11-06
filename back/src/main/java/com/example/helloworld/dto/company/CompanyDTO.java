package com.example.helloworld.dto.company;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CompanyDTO {
    private int companyNo;
    private String manager;
    private int career;
    private int educationNo;
    private int pay;
    private int workTypeNo;
    private String content;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private int personnel;
    private LocalDateTime regDate;
    private String regIp;
    private boolean isDelete;
}
