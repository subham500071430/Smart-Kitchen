package com.example.demo;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserMapper {

    @Autowired
    public ModelMapper modelMapper;

    public UserDTO mapUsertoDTO(User user){

        UserDTO userDTO = modelMapper.map(user,UserDTO.class);

        return userDTO;
    }

    public User mapToUser(UserDTO userDTO){

         User user = modelMapper.map(userDTO,User.class);
         return user;
    }

}

