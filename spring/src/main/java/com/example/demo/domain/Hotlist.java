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
	private String hTruck;
	private String hError;

	public Hotlist(String hMember, String hTruck) {
		super();
		this.hMember = hMember;
		this.hTruck = hTruck;
	}

	// public Hotlist() {
	// // TODO Auto-generated constructor stub
	// }
	//
	// public Hotlist(int hId, String hMember, String hTruck) {
	// super();
	// this.hId = hId;
	// this.hMember = hMember;
	// this.hTruck = hTruck;
	// }
	//
	// @Override
	// public String toString() {
	// return "Hotlist [hId=" + hId + ", hMember=" + hMember + ", hTruck=" +
	// hTruck + "]";
	// }
	//
	// public int gethId() {
	// return hId;
	// }
	//
	// public void sethId(int hId) {
	// this.hId = hId;
	// }
	//
	// public String gethMember() {
	// return hMember;
	// }
	//
	// public void sethMember(String hMember) {
	// this.hMember = hMember;
	// }
	//
	// public String gethTruck() {
	// return hTruck;
	// }
	//
	// public void sethTruck(String hTruck) {
	// this.hTruck = hTruck;
	// }

}
