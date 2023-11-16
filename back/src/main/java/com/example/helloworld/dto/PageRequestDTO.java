package com.example.helloworld.dto;


import lombok.*;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PageRequestDTO {

    @Builder.Default
    private int pg = 1;
    @Builder.Default
    private int size = 10;
    @Builder.Default
    private int cateNo = 0;

    public Pageable getPageableDesc(String sort){
        return  PageRequest.of(this.pg - 1, this.size, Sort.by(sort).descending());
    }
    public Pageable getPageableAsc(String sort){
        return PageRequest.of(this.pg - 1, this.size, Sort.by(sort));
    }
}
