package com.example.demo.domain;

public class Review {

	private int r_id;
	private String r_commnet;
	private int r_avg;
	private String r_date;
	private String r_member;
	private String r_truck;
	public int getR_id() {
		return r_id;
	}
	public void setR_id(int r_id) {
		this.r_id = r_id;
	}
	public String getR_commnet() {
		return r_commnet;
	}
	public void setR_commnet(String r_commnet) {
		this.r_commnet = r_commnet;
	}
	public int getR_avg() {
		return r_avg;
	}
	public void setR_avg(int r_avg) {
		this.r_avg = r_avg;
	}
	public String getR_date() {
		return r_date;
	}
	public void setR_date(String r_date) {
		this.r_date = r_date;
	}
	public String getR_member() {
		return r_member;
	}
	public void setR_member(String r_member) {
		this.r_member = r_member;
	}
	public String getR_truck() {
		return r_truck;
	}
	public void setR_truck(String r_truck) {
		this.r_truck = r_truck;
	}
	public Review(int r_id, String r_commnet, int r_avg, String r_date, String r_member, String r_truck) {
		super();
		this.r_id = r_id;
		this.r_commnet = r_commnet;
		this.r_avg = r_avg;
		this.r_date = r_date;
		this.r_member = r_member;
		this.r_truck = r_truck;
	}

	
}
