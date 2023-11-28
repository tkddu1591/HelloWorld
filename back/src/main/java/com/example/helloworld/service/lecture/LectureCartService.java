package com.example.helloworld.service.lecture;

import com.example.helloworld.dto.lecture.LectureCartDTO;
import com.example.helloworld.dto.member.MemberDTO;
import com.example.helloworld.entity.lecture.LectureCartEntity;
import com.example.helloworld.repository.lecture.LectureCartRepository;
import com.example.helloworld.transform.lecture.LectureCartTransform;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LectureCartService {
    private final LectureCartRepository lectureCartRepository;
    private final LectureCartTransform lectureCartTransform;

    public int countByUidAndLectureNo(LectureCartDTO lectureCartDTO){
        return lectureCartRepository.countByMember_UidAndLecture_LectureNo(lectureCartDTO.getUid(),lectureCartDTO.getLectureNo());
    }

    public void save(LectureCartDTO lectureCartDTO) {
        LectureCartEntity oldLectureCartEntity = lectureCartRepository.findByMember_UidAndLecture_LectureNo(lectureCartDTO.getUid(), lectureCartDTO.getLectureNo());
        if (oldLectureCartEntity != null) {
            lectureCartDTO.setCartNo(oldLectureCartEntity.getCartNo());
            lectureCartDTO.setCount(oldLectureCartEntity.getCount() + lectureCartDTO.getCount());
            lectureCartDTO.setTotal((lectureCartDTO.getPrice() - (lectureCartDTO.getPrice() * lectureCartDTO.getDiscount() / 100)) * lectureCartDTO.getCount());
        }
        lectureCartRepository.save(lectureCartTransform.toEntity(lectureCartDTO));
    }

    public List<LectureCartDTO> findByUidAndLectureNo(MemberDTO memberDTO) {
        return (lectureCartRepository.findByMember_Uid(memberDTO.getUid()).stream().map(lectureCartTransform::toDTO).toList());
    }

    @Transactional
    public void deleteByCartNo(int cartNo) {
        lectureCartRepository.deleteByCartNo(cartNo);
    }

    @Transactional
    public void deleteByUid(String uid) {
        lectureCartRepository.deleteByMember_Uid(uid);
    }
}
