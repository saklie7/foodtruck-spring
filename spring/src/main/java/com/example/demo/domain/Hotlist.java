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
public class Hotlist {

	private int hId;
	private String hMember;
	private int hTruck;
	
	//같은 트럭을 중복해서 등록할 때 
	private String hError;

	public Hotlist(String hMember, int hTruck) {
		super();
		this.hMember = hMember;
		this.hTruck = hTruck;
	}

}
