package com.example.helloworld.service.member;

import com.example.helloworld.dto.lecture.LectureCartDTO;
import com.example.helloworld.dto.member.MemberLectureContentDTO;
import com.example.helloworld.entity.lecture.LectureCartEntity;
import com.example.helloworld.repository.member.MemberLectureContentRepository;
import com.example.helloworld.transform.member.MemberLectureContentTransform;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberLectureContentService {
    private final MemberLectureContentRepository memberLectureContentRepository;
    private final MemberLectureContentTransform memberLectureContentTransform;

    public void save(MemberLectureContentDTO memberLectureContentDTO) {
        if (1 > memberLectureContentRepository.countByLectureContent_ContentNoAndMember_Uid(memberLectureContentDTO.getContentNo(), memberLectureContentDTO.getUid()))
            memberLectureContentRepository.save(memberLectureContentTransform.toEntity(memberLectureContentDTO));
    }

    public List<MemberLectureContentDTO> list(MemberLectureContentDTO memberLectureContentDTO) {
        return memberLectureContentRepository.findByLectureContent_Lecture_LectureNoAndMember_Uid(memberLectureContentDTO.getLectureNo(), memberLectureContentDTO.getUid()).stream().map(memberLectureContentTransform::toDTO).toList();
    }
}
