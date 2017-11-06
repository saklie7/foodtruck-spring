package com.example.demo.domain;

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
public class Truck {

	private int tId;
	private String tName;
	private String tImage;;
	private double tAvg;
	private String tComment;
	private String tOpen;
	private String tClose;
	private double tLat;
	private double tLng;
	private String tAddress;
	private String tFoodmaterial;
	private String tMember;
//	private String tresource; // 서버단에서만 사용하는 변수, DB에는 적용 안했음 

}
