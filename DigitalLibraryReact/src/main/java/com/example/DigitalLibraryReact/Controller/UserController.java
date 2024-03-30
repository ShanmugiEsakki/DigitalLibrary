package com.example.DigitalLibraryReact.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.DigitalLibraryReact.Model.UserModel;
import com.example.DigitalLibraryReact.Service.UserService;

@RestController
@CrossOrigin(origins="http://localhost:3001/")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/api/v1/user/login")
    public ResponseEntity<String> login(@RequestBody UserModel user) {
        UserModel existingUser = userService.findByEmail(user.getEmail());
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            return ResponseEntity.ok().body("Login Success");
        } else {
            return ResponseEntity.badRequest().body("Invalid email or password");
        }
    }

    @PostMapping("/api/v1/user/save")
    public ResponseEntity<String> saveUser(@RequestBody UserModel user) {
        // You may want to add validation and error handling here
        userService.save(user);
        return ResponseEntity.ok().body("Employee Registration Successfully");
    }
}
