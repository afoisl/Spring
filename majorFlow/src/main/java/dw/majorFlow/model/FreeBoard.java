package dw.majorflow.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "free_board")
public class FreeBoard {
    @Id
    @Column(name = "freeBoard_id")
    private String freeBoardId;

    @Column
    private String text;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
