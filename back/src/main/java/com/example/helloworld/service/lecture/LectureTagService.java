package com.example.helloworld.service.lecture;

import com.example.helloworld.dto.lecture.LectureTagDTO;
import com.example.helloworld.repository.lecture.LectureTagRepository;
import com.example.helloworld.transform.lecture.LectureTagTransform;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.relational.core.sql.In;
import org.springframework.stereotype.Service;

import java.util.List;

@Log4j2
@Service
@RequiredArgsConstructor
public class LectureTagService {
    private final LectureTagRepository lectureTagRepository;
    private final LectureTagTransform lectureTagTransform;
    public List<LectureTagDTO> findAll() {
        return lectureTagRepository.findAll().stream().map(lectureTagTransform::toDTO).toList();
    }

}
