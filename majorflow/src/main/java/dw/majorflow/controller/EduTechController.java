package dw.majorflow.controller;

import dw.majorflow.model.EduTech;
import dw.majorflow.service.EduTechService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/edutech")
public class EduTechController {

    @Autowired
    EduTechService eduTechService;

    @GetMapping("/get/{id}")
    public EduTech getEduTechById(@PathVariable("id") Integer EduTechId) {  // 변수명을 통일
        return eduTechService.getEduTechById(EduTechId);
    }

        @PostMapping("/save")
    public ResponseEntity<EduTech>saveEduTech(@RequestBody EduTech eduTech) {
        return new ResponseEntity<>(eduTechService.saveEduTech(eduTech),
                HttpStatus.OK);
    }

}
