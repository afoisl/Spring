package dw.majorflow.dto;

import dw.majorflow.model.Teacher;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class TeacherDto {
    private long teacherId;
    private String teacherName;

    public TeacherDto getTeacher(Teacher teacher) {
        TeacherDto teacherDto = new TeacherDto();
        teacherDto.setTeacherId(teacher.getTeacherId());
        teacherDto.setTeacherName(teacher.getTeacherName());
        return teacherDto;
    }
}
