package edu.nagarro.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import edu.nagarro.dto.UserQuestion;
import edu.nagarro.entity.User;
 
public interface UserRepository extends JpaRepository<User,Integer> {
	
    User findByEmailAndPassword(String email, String password);
    
    @Query("SELECT new edu.nagarro.dto.UserQuestion(q.title, q.product, q.description, q.date, u.name) FROM User u JOIN u.questions q")
    List<UserQuestion> getJoinInformation();
    
    @Query("SELECT new edu.nagarro.dto.UserQuestion(q.title, q.product, q.description, q.date, u.name) FROM User u JOIN u.questions q WHERE q.title LIKE %:text% OR q.description LIKE %:text% ")
    List<UserQuestion> searchByTextLike(@Param("text") String text);
}
