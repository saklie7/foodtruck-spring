package com.example.demo.domain;

public class Truck {

	private String t_id;
	private String t_name;
	private String t_food;
	private String t_commnet;
	private String t_open;
	private String t_close;
	private String t_local;
	private String t_address;
	private String t_member;
	public String getT_id() {
		return t_id;
	}
	public void setT_id(String t_id) {
		this.t_id = t_id;
	}
	public String getT_name() {
		return t_name;
	}
	public void setT_name(String t_name) {
		this.t_name = t_name;
	}
	public String getT_food() {
		return t_food;
	}
	public void setT_food(String t_food) {
		this.t_food = t_food;
	}
	public String getT_commnet() {
		return t_commnet;
	}
	public void setT_commnet(String t_commnet) {
		this.t_commnet = t_commnet;
	}
	public String getT_open() {
		return t_open;
	}
	public void setT_open(String t_open) {
		this.t_open = t_open;
	}
	public String getT_close() {
		return t_close;
	}
	public void setT_close(String t_close) {
		this.t_close = t_close;
	}
	public String getT_local() {
		return t_local;
	}
	public void setT_local(String t_local) {
		this.t_local = t_local;
	}
	public String getT_address() {
		return t_address;
	}
	public void setT_address(String t_address) {
		this.t_address = t_address;
	}
	public String getT_member() {
		return t_member;
	}
	public void setT_member(String t_member) {
		this.t_member = t_member;
	}
	public Truck(String t_id, String t_name, String t_food, String t_commnet, String t_open, String t_close,
			String t_local, String t_address, String t_member) {
		super();
		this.t_id = t_id;
		this.t_name = t_name;
		this.t_food = t_food;
		this.t_commnet = t_commnet;
		this.t_open = t_open;
		this.t_close = t_close;
		this.t_local = t_local;
		this.t_address = t_address;
		this.t_member = t_member;
	}
	
	
	
	
}
