package com.example.helloworld.service.lecture;

import com.example.helloworld.dto.lecture.LectureLevelDTO;
import com.example.helloworld.repository.lecture.LectureLevelRepository;
import com.example.helloworld.transform.lecture.LectureLevelTransform;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;

@Log4j2
@Service
@RequiredArgsConstructor
public class LectureLevelService {
    private final LectureLevelRepository lectureLevelRepository;
    private final LectureLevelTransform lectureLevelTransform;
    public List<LectureLevelDTO> findAll() {
        return lectureLevelRepository.findAll().stream().map(lectureLevelTransform::toDTO).toList();
    }

}
