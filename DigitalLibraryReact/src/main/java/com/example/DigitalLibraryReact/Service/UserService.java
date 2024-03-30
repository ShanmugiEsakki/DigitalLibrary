package com.example.DigitalLibraryReact.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.DigitalLibraryReact.Model.UserModel;
import com.example.DigitalLibraryReact.Repo.UserRepo;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    public UserModel findByEmail(String email) {
        return userRepo.findByEmail(email);
    }

    public UserModel save(UserModel user) {
        return userRepo.save(user);
    }
}
