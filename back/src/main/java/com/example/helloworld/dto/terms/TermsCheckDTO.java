package com.example.helloworld.dto.terms;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TermsCheckDTO {
    private String uid;

    private String termsCheck;
    private String privacyCheck;
    private String locationCheck;
    private String financeCheck;
    private String taxCheck;
    private LocalDateTime applyDate;
}
