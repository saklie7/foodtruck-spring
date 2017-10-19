package com.example.demo.domain;

public class Food {

	private int f_id;
	private String f_name;
	private String f_price;
	private String f_image;
	private String f_material;
	private String f_description;
	private String f_truck;
	public int getF_id() {
		return f_id;
	}
	public void setF_id(int f_id) {
		this.f_id = f_id;
	}
	public String getF_name() {
		return f_name;
	}
	public void setF_name(String f_name) {
		this.f_name = f_name;
	}
	public String getF_price() {
		return f_price;
	}
	public void setF_price(String f_price) {
		this.f_price = f_price;
	}
	public String getF_image() {
		return f_image;
	}
	public void setF_image(String f_image) {
		this.f_image = f_image;
	}
	public String getF_material() {
		return f_material;
	}
	public void setF_material(String f_material) {
		this.f_material = f_material;
	}
	public String getF_description() {
		return f_description;
	}
	public void setF_description(String f_description) {
		this.f_description = f_description;
	}
	public String getF_truck() {
		return f_truck;
	}
	public void setF_truck(String f_truck) {
		this.f_truck = f_truck;
	}
	public Food(int f_id, String f_name, String f_price, String f_image, String f_material, String f_description,
			String f_truck) {
		super();
		this.f_id = f_id;
		this.f_name = f_name;
		this.f_price = f_price;
		this.f_image = f_image;
		this.f_material = f_material;
		this.f_description = f_description;
		this.f_truck = f_truck;
	}

	

}
