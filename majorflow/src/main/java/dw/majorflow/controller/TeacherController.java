package dw.majorflow.controller;

import dw.majorflow.model.Teacher;
import dw.majorflow.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TeacherController {
    @Autowired
    TeacherService teacherService;

    @GetMapping("/teacher/{id}")
    public ResponseEntity<Teacher> getTeacherById(@PathVariable long id) {
        return new ResponseEntity<>(teacherService.getTeacherById(id),
                HttpStatus.OK);
    }
}
