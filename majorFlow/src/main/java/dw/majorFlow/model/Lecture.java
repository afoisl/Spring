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
@Table(name = "lecture")
public class Lecture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int lectureId;

    @Column(name = "lecture_name")
    private String lectureName;

    @Column
    private String subject;

    @Column
    private int playTime;

    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;
}
