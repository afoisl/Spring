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
@Table(name = "free_board")
public class FreeBoard {
    @Id
    @Column
    private String freeBoardId;

    @Column
    private String text;

    @ManyToOne
    @JoinColumn
    private User user;
}
