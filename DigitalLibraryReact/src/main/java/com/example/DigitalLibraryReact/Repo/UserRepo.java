package com.example.DigitalLibraryReact.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.DigitalLibraryReact.Model.UserModel;

@Repository
public interface UserRepo extends JpaRepository<UserModel, Long> {
    UserModel findByEmail(String email);
}
