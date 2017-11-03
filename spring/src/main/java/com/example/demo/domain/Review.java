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

	// public Review() {
	// }
	//
	// public Review(int rId, String rComment, int rAvg, Date rDate, String
	// rMember, String rTruck) {
	// super();
	// this.rId = rId;
	// this.rComment = rComment;
	// this.rAvg = rAvg;
	// this.rDate = rDate;
	// this.rMember = rMember;
	// this.rTruck = rTruck;
	// }
	//
	// @Override
	// public String toString() {
	// SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
	// String xd = sdf.format(rDate);
	//
	// return "Review [rId=" + rId + ", rComment=" + rComment + ", rAvg=" + rAvg
	// + ", rDate=" + xd + ", rMember="
	// + rMember + ", rTruck=" + rTruck + "]";
	// }
	//
	// public int getrId() {
	// return rId;
	// }
	//
	// public void setrId(int rId) {
	// this.rId = rId;
	// }
	//
	// public String getrComment() {
	// return rComment;
	// }
	//
	// public void setrComment(String rComment) {
	// this.rComment = rComment;
	// }
	//
	// public int getrAvg() {
	// return rAvg;
	// }
	//
	// public void setrAvg(int rAvg) {
	// this.rAvg = rAvg;
	// }
	//
	// public Date getrDate() {
	// return rDate;
	// }
	//
	// public void setrDate(Date rDate) {
	// this.rDate = rDate;
	// }
	//
	// public String getrMember() {
	// return rMember;
	// }
	//
	// public void setrMember(String rMember) {
	// this.rMember = rMember;
	// }
	//
	// public String getrTruck() {
	// return rTruck;
	// }
	//
	// public void setrTruck(String rTruck) {
	// this.rTruck = rTruck;
	// }

}
