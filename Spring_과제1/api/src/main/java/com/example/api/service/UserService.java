package com.example.api.service;

import com.example.api.dto.User;
import com.example.api.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @Transactional
    public User createUser(User user){
        User newUser = new User();
        newUser.setUserId(user.getUserId());
        newUser.setUsername(user.getUsername());
        newUser.setPassword(user.getPassword());
        newUser.setRegisteredUser(user.getUserId());
        newUser.setUseYN("Y");
        return userRepository.save(newUser);
    }

    @Transactional
    public User updateUser(User user){
        User updatedUser = userRepository.findById(user.getUserId()).orElseThrow(() -> new IllegalArgumentException("존재하지 않는 유저입니다."));

        updatedUser.setUsername(user.getUsername());
        updatedUser.setPassword(user.getPassword());
        updatedUser.setUpdatedUser(user.getUserId());

        return userRepository.save(updatedUser);
    }

    @Transactional
    public void deleteUser(User user){
        User deletedUser = userRepository.findById(user.getUserId()).orElseThrow(() -> new IllegalArgumentException("존재하지 않는 유저입니다."));

        deletedUser.setUpdatedUser(user.getUserId());
        deletedUser.setUseYN("N");
        userRepository.save(deletedUser);

    }
}
