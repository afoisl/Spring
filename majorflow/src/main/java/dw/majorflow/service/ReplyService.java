package dw.majorflow.service;

import dw.majorflow.model.Reply;
import dw.majorflow.model.User;
import dw.majorflow.repository.ReplyRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ReplyService {

    @Autowired
    ReplyRepository replyRepository;

    public String saveReply(Reply reply) {
        return replyRepository;
    }
}
