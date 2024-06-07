package edu.nagarro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import edu.nagarro.dto.UserQuestion;
import edu.nagarro.entity.User;
import edu.nagarro.repository.UserRepository;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
public class UserController {

	@Autowired
	private UserRepository repository;

	@PostMapping("/register")
	public String register(@RequestBody User user) {

		try {
			repository.save(user);
			return "Hi " + user.getName() + " your Registration process successfully completed";
		} catch (Exception e) {
			return "Error : Registration could not be completed!!";
		}
	}

	@GetMapping("/findUser/{email}/{password}")
	public User findUser(@PathVariable String email, @PathVariable String password) {
		
		try {
			return repository.findByEmailAndPassword(email, password);
		}
		catch(Exception e) {
			return null;
		}
	}
	
	@GetMapping("/getInfo")
	public List<UserQuestion> getJoinInformation(){
		
		return repository.getJoinInformation();
	}

	@GetMapping("/searchByTextLike/{text}")
	public List<UserQuestion> searchByTextLike(@PathVariable String text){
		
		return repository.searchByTextLike(text);
	}
}
