package edu.nagarro.entity;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "questions")
public class Question{
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "QUESTIONID")
	private int questionid;

	@Column(name = "TITLE")
	private String title;
	
	@Column(name = "PRODUCT")
	private String product;
	
	@Column(name = "DESCRIPTION")
	private String description;
	
	@Column(name = "DATE")
	private Date date;

}
