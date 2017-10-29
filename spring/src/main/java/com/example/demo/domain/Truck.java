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
	private String tFood;
	private double tAvg;
	private String tComment;
	private String tOpen;
	private String tClose;
	private double tLat;
	private double tLng;
	private String tFoodmaterial;
	private String tMember;

//	public Truck() {
//	}
//
//	public Truck(String tId, String tName, String tFood, String tComment, String tOpen, String tClose, String tLocal,
//			String tAddress) {
//		super();
//		this.tId = tId;
//		this.tName = tName;
//		this.tFood = tFood;
//		this.tComment = tComment;
//		this.tOpen = tOpen;
//		this.tClose = tClose;
//		this.tLocal = tLocal;
//		this.tAddress = tAddress;
//	}
//
//	@Override
//	public String toString() {
//		return "Truck [tId=" + tId + ", tName=" + tName + ", tFood=" + tFood + ", tComment=" + tComment + ", tOpen="
//				+ tOpen + ", tClose=" + tClose + ", tLocal=" + tLocal + ", tAddress=" + tAddress + "]";
//	}
//
//	public String gettId() {
//		return tId;
//	}
//
//	public void settId(String tId) {
//		this.tId = tId;
//	}
//
//	public String gettName() {
//		return tName;
//	}
//
//	public void settName(String tName) {
//		this.tName = tName;
//	}
//
//	public String gettFood() {
//		return tFood;
//	}
//
//	public void settFood(String tFood) {
//		this.tFood = tFood;
//	}
//
//	public String gettComment() {
//		return tComment;
//	}
//
//	public void settComment(String tComment) {
//		this.tComment = tComment;
//	}
//
//	public String gettOpen() {
//		return tOpen;
//	}
//
//	public void settOpen(String tOpen) {
//		this.tOpen = tOpen;
//	}
//
//	public String gettClose() {
//		return tClose;
//	}
//
//	public void settClose(String tClose) {
//		this.tClose = tClose;
//	}
//
//	public String gettLocal() {
//		return tLocal;
//	}
//
//	public void settLocal(String tLocal) {
//		this.tLocal = tLocal;
//	}
//
//	public String gettAddress() {
//		return tAddress;
//	}
//
//	public void settAddress(String tAddress) {
//		this.tAddress = tAddress;
//	}
//
}
