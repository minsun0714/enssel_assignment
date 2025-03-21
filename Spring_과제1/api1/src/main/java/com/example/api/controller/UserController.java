package com.example.api.controller;

import com.example.api.domain.User;
import com.example.api.dto.UserSearchDTO;
import com.example.api.service.UserService;
import com.querydsl.core.Tuple;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/bi/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/table")
    public ResponseEntity<List<User>> getUsers(@RequestParam Map<String,String> allRequestParams){
        return ResponseEntity.ok(userService.getAllUsers(allRequestParams));
    }

    @GetMapping("/select")
    public ResponseEntity<List<UserSearchDTO>> select(@RequestParam Map<String,String> allRequestParams) {
        System.out.println(allRequestParams);
        return ResponseEntity.ok(userService.select(allRequestParams));
    }

    @PostMapping("/regiUser")
    public ResponseEntity<User> postUser(@RequestBody User user){
        User createdUser = userService.createUser(user);

        return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
    }

    @PostMapping("/update")
    public ResponseEntity<User> updateUser(@RequestBody User user){
        User modifiedUser = userService.updateUser(user);

        return ResponseEntity.status(HttpStatus.OK).body(modifiedUser);
    }

    @PostMapping("/delete")
    public ResponseEntity<Void> deleteUser(@RequestBody User user){
        userService.deleteUser(user);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
