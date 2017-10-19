package com.example.demo.domain;

public class Canival {

	private int c_id;
	private String c_title;
	private String c_content;
	private String c_image;
	private String c_sdate;
	private String c_edate;

	public int getC_id() {
		return c_id;
	}

	public void setC_id(int c_id) {
		this.c_id = c_id;
	}

	public String getC_title() {
		return c_title;
	}

	public void setC_title(String c_title) {
		this.c_title = c_title;
	}

	public String getC_content() {
		return c_content;
	}

	public void setC_content(String c_content) {
		this.c_content = c_content;
	}

	public String getC_image() {
		return c_image;
	}

	public void setC_image(String c_image) {
		this.c_image = c_image;
	}

	public String getC_sdate() {
		return c_sdate;
	}

	public void setC_sdate(String c_sdate) {
		this.c_sdate = c_sdate;
	}

	public String getC_edate() {
		return c_edate;
	}

	public void setC_edate(String c_edate) {
		this.c_edate = c_edate;
	}

	public Canival(int c_id, String c_title, String c_content, String c_image, String c_sdate, String c_edate) {
		super();
		this.c_id = c_id;
		this.c_title = c_title;
		this.c_content = c_content;
		this.c_image = c_image;
		this.c_sdate = c_sdate;
		this.c_edate = c_edate;
	}

}
