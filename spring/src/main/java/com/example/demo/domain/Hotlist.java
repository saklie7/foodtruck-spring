package com.example.demo.domain;

public class Hotlist {

	
	private int h_id;
	private String h_member;
	private String h_truck;
	public int getH_id() {
		return h_id;
	}
	public void setH_id(int h_id) {
		this.h_id = h_id;
	}
	public String getH_member() {
		return h_member;
	}
	public void setH_member(String h_member) {
		this.h_member = h_member;
	}
	public String getH_truck() {
		return h_truck;
	}
	public void setH_truck(String h_truck) {
		this.h_truck = h_truck;
	}
	public Hotlist(int h_id, String h_member, String h_truck) {
		super();
		this.h_id = h_id;
		this.h_member = h_member;
		this.h_truck = h_truck;
	}


	

}
