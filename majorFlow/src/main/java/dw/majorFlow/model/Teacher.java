package dw.majorFlow.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "teacher")
public class Teacher {
    @Id
    @Column(name = "teacher_id")
    private String teacherId;

    @ManyToOne
    @JoinColumn
    private User user;

    @Column(name = "teacher_name")
    private String teacherName;
}
