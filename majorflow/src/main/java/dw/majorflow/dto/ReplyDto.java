package dw.majorflow.dto;

import dw.majorflow.model.FreeBoard;
import dw.majorflow.model.Reply;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ReplyDto {
    private long replyId;
    private String replyText;
    private FreeBoard freeBoard;

    public ReplyDto toReplyDtoFromReply(Reply reply) {
        ReplyDto replyDto = new ReplyDto();
        replyDto.setReplyId(reply.getReplyId());
        replyDto.setReplyText(reply.getReplyText());
        replyDto.setFreeBoard(reply.getFreeBoard());
        return replyDto;
    }
}
