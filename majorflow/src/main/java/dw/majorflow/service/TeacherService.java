package dw.majorflow.service;

import dw.majorflow.exception.ResourceNotFoundException;
import dw.majorflow.model.Teacher;
import dw.majorflow.repository.TeacherRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Transactional
public class TeacherService {
    @Autowired
    TeacherRepository teacherRepository;

    public Teacher getTeacherById(long id) {
        Optional<Teacher> teacherOptional = teacherRepository.findById(id);
        if(teacherOptional.isPresent()) {
            return teacherOptional.get();
        }else {
            throw new ResourceNotFoundException("Teacher", "ID", id);
        }

    }
}
