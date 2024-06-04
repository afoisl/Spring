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
@Table(name = "review")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long reviewID;

    @Column(name = "user_id")
    private User user;

    @Column(name = "lecture_id")
    private Lecture lecture;

    @Column(name = "review_text")
    private String text;

    @Column
    private int rating;
}
