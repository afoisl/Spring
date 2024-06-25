package dw.majorflow.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "lecture_class")
public class LectureClass {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long lecClassId;

    @ManyToOne
    @JoinColumn(name = "lectureId")
    private Lecture lecture;

    @Column(name = "lecture_class")
    private String lecClass;

}
