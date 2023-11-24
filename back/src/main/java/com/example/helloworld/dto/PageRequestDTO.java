package com.example.helloworld.dto;


import com.example.helloworld.dto.lecture.LectureDTO;
import lombok.*;
import lombok.experimental.WithBy;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;


@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
@ToString
public class PageRequestDTO {

    @Builder.Default
    private int pg = 1;
    @Builder.Default
    private int size = 10;
    @Builder.Default
    private Integer cateNo = 0;
    @Builder.Default
    private String sort = "communityNo";

    @Builder.Default
    private String commentWrite = "";
    @Builder.Default
    private Integer communityNo = 0;
    @Builder.Default
    private Integer parentNo = 0;
    @Builder.Default
    private Integer commentNo = 0;
    @Builder.Default
    private String commentType = "Desc";
    @Builder.Default
    private String uid = "";
    private LectureDTO lecture;
    private int lectureNo;

    public Pageable getPageableDesc(){
        return  PageRequest.of(this.pg - 1, this.size, Sort.by(this.sort).descending());
    }
    public Pageable getPageableAsc(){
        return PageRequest.of(this.pg - 1, this.size, Sort.by(this.sort));
    }
}
