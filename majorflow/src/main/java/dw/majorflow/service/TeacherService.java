package dw.majorflow.service;

<<<<<<< HEAD
import dw.majorflow.model.Teacher;
import dw.majorflow.model.User;
=======
import dw.majorflow.dto.TeacherDto;
import dw.majorflow.exception.ResourceNotFoundException;
import dw.majorflow.model.Teacher;
>>>>>>> 134ed2bf6f4f3bb74e16b22a16cae33dae0f70ce
import dw.majorflow.repository.TeacherRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Transactional
public class TeacherService {
<<<<<<< HEAD
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
=======
    @Autowired
    TeacherRepository teacherRepository;

    public TeacherDto getTeacherById(Long id) {
        Optional<Teacher> teacher = teacherRepository.findById(id);
        if (teacher.isPresent()) {
            return toDto(teacher.get());

        } else {
            throw new RuntimeException("Teacher not found with id: " + id);
        }
    }

    private TeacherDto toDto(Teacher teacher) {
        TeacherDto dto = new TeacherDto();
        dto.setTeacherId(teacher.getTeacherId());
        dto.setTeacherName(teacher.getTeacherName());
        return dto;
    }
>>>>>>> 134ed2bf6f4f3bb74e16b22a16cae33dae0f70ce
}
