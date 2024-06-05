package dw.majorflow.model;

import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "reply")
public class Reply {
    @Id
    @Column(name = "reply_id")
    private String replyId;

    @Column(name = "reply_text")
    private String replyText;

    @ManyToOne
    @JoinColumn(name = "freeBoard_id")
    private FreeBoard freeBoard;
}
