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

    @GetMapping(path = "/validateUser")
    @ResponseBody
    public boolean validateUser(@RequestParam String email_id , @RequestParam String password){

         Optional<User> user = usersRepository.findById(email_id);

         if(!user.isEmpty()){

             if(user.get().getPassword().equals(password)){
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
