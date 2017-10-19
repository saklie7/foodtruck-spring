package com.example.demo.domain;

public class Support {

	private int s_id;
	private String s_title;
	private String s_content;
	private String s_date;
	private int s_registype;
	private String s_member;
	public int getS_id() {
		return s_id;
	}
	public void setS_id(int s_id) {
		this.s_id = s_id;
	}
	public String getS_title() {
		return s_title;
	}
	public void setS_title(String s_title) {
		this.s_title = s_title;
	}
	public String getS_content() {
		return s_content;
	}
	public void setS_content(String s_content) {
		this.s_content = s_content;
	}
	public String getS_date() {
		return s_date;
	}
	public void setS_date(String s_date) {
		this.s_date = s_date;
	}
	public int getS_registype() {
		return s_registype;
	}
	public void setS_registype(int s_registype) {
		this.s_registype = s_registype;
	}
	public String getS_member() {
		return s_member;
	}
	public void setS_member(String s_member) {
		this.s_member = s_member;
	}
	public Support(int s_id, String s_title, String s_content, String s_date, int s_registype, String s_member) {
		super();
		this.s_id = s_id;
		this.s_title = s_title;
		this.s_content = s_content;
		this.s_date = s_date;
		this.s_registype = s_registype;
		this.s_member = s_member;
	}
	
	
	
}
