package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private UserMapper userMapper;

    @PostMapping(path = "/addUser")
    public void addNewUser(@RequestBody UserDTO userDTO) {
        User user = userMapper.mapToUser(userDTO);
        usersRepository.save(user);
    }

    @GetMapping(path = "/getAllUsers")
    @ResponseBody
    public Iterable<User> getAllUser() {
        Iterable<User> users = usersRepository.findAll();

        return users;
    }

    @PostMapping(path = "/validateUser")
    @ResponseBody
    public boolean validateUser(@RequestBody UserDTO userDTO){

        User user = userMapper.mapToUser(userDTO);

        Optional<User> optionalUser = usersRepository.findById(user.getEmail_id());

         if(!optionalUser.isEmpty()){

             if(optionalUser.get().getPassword().equals(user.getPassword())){
                 return true;
             }
         }

         return false;
    }

    @GetMapping(path = "/hello")
    public String getHello(){
        return "Hello";
    }
}
