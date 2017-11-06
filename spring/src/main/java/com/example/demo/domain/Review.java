package com.example.demo.domain;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Review {

	private int rId;
	private String rComment;
	private String rImage;
	private int rScore;
	private Date rDate;
	private String rMember;
	private int rTruck;
	
	private String rError;

	public Review(String rComment, int rScore, String rMember, int rTruck) {
		this.rComment = rComment;
		this.rScore = rScore;
		this.rMember = rMember;
		this.rTruck = rTruck;
	}

	public Review(String rError) {
		this.rError = rError;
	}

}
