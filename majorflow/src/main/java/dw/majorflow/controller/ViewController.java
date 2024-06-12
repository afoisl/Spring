package dw.majorflow.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {
    @GetMapping("/majorflow/index.html")
    public String index() {
        return "index";
    }

    @GetMapping("/majorflow/login.html")
    public String login() {
        return "login";
    }
}
