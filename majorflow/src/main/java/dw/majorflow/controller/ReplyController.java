package dw.majorflow.controller;

import dw.majorflow.model.Reply;
import dw.majorflow.service.ReplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/reply")
public class ReplyController {
    private ReplyService replyService;

    public ReplyController(ReplyService replyService) {
        this.replyService = replyService;
    }

    @PostMapping("/save")
    public ResponseEntity<String> saveReply(@RequestBody Reply reply) {
        return new ResponseEntity<>(replyService.saveReply(reply),
                HttpStatus.OK);
    }

}
