package dw.majorflow.controller;

import dw.majorflow.model.User;
import dw.majorflow.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

//    public UserController() {
//    }

    @GetMapping("/user")
    public ResponseEntity<List<User>> getUsersAll() {
        return new ResponseEntity<>(userService.getUsersAll(),
                HttpStatus.OK);
    }

    @PostMapping("/user/save")
    public ResponseEntity<User> saveUser(@RequestBody User user) {
        return new ResponseEntity<>(userService.saveUser(user),
                HttpStatus.OK);
    }
}
