package dw.majorflow.controller;

<<<<<<< HEAD
=======
import dw.majorflow.dto.TeacherDto;
>>>>>>> 134ed2bf6f4f3bb74e16b22a16cae33dae0f70ce
import dw.majorflow.model.Teacher;
import dw.majorflow.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
<<<<<<< HEAD
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
=======
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
>>>>>>> 134ed2bf6f4f3bb74e16b22a16cae33dae0f70ce

@RestController
@RequestMapping("/teacher")
public class TeacherController {
<<<<<<< HEAD
    private final TeacherService teacherService;

    @Autowired
    public TeacherController(TeacherService teacherService) {
        this.teacherService = teacherService;
    }
    @GetMapping("/{teacherId}")
    public ResponseEntity<Teacher> getTeacherById(@PathVariable Long teacherId) {
        Teacher teacher = teacherService.getTeacherById(teacherId);
        return new ResponseEntity<>(teacher, HttpStatus.OK);
=======
    @Autowired
    TeacherService teacherService;

    @GetMapping("/get/{id}")
    public TeacherDto getTeacherById(@PathVariable Long id) {
        return teacherService.getTeacherById(id);
>>>>>>> 134ed2bf6f4f3bb74e16b22a16cae33dae0f70ce
    }
}
