package dw.majorflow.service;

import dw.majorflow.model.Teacher;
import dw.majorflow.model.User;
import dw.majorflow.repository.TeacherRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Transactional
public class TeacherService {
    private final TeacherRepository teacherRepository;

    @Autowired
    public TeacherService(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
    }

    public Teacher getTeacherById(Long teacherId) {
        Optional<Teacher> teacherOptional = teacherRepository.findByTeacherId(teacherId);
        if (teacherOptional.isPresent()) {
            return teacherOptional.get();
        } else {
            throw new RuntimeException("Teacher not found with id: " + teacherId);
        }
    }
}
