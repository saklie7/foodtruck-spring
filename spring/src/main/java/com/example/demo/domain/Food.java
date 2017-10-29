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
public class Food {

	private int fId;
	private String fName;
	private String fPrice;
	private String fImage;
	private String fDescription;
	private int fTruck;

//	public Food() {
//		// TODO Auto-generated constructor stub
//	}
//
//	public Food(int fId, String fName, String fPrice, String fImage, String fMaterial, String fDescription,
//			String fTruck) {
//		super();
//		this.fId = fId;
//		this.fName = fName;
//		this.fPrice = fPrice;
//		this.fImage = fImage;
//		this.fMaterial = fMaterial;
//		this.fDescription = fDescription;
//		this.fTruck = fTruck;
//	}
//
//	@Override
//	public String toString() {
//		return "Food [fId=" + fId + ", fName=" + fName + ", fPrice=" + fPrice + ", fImage=" + fImage + ", fMaterial="
//				+ fMaterial + ", fDescription=" + fDescription + ", fTruck=" + fTruck + "]";
//	}
//
//	public int getfId() {
//		return fId;
//	}
//
//	public void setfId(int fId) {
//		this.fId = fId;
//	}
//
//	public String getfName() {
//		return fName;
//	}
//
//	public void setfName(String fName) {
//		this.fName = fName;
//	}
//
//	public String getfPrice() {
//		return fPrice;
//	}
//
//	public void setfPrice(String fPrice) {
//		this.fPrice = fPrice;
//	}
//
//	public String getfImage() {
//		return fImage;
//	}
//
//	public void setfImage(String fImage) {
//		this.fImage = fImage;
//	}
//
//	public String getfMaterial() {
//		return fMaterial;
//	}
//
//	public void setfMaterial(String fMaterial) {
//		this.fMaterial = fMaterial;
//	}
//
//	public String getfDescription() {
//		return fDescription;
//	}
//
//	public void setfDescription(String fDescription) {
//		this.fDescription = fDescription;
//	}
//
//	public String getfTruck() {
//		return fTruck;
//	}
//
//	public void setfTruck(String fTruck) {
//		this.fTruck = fTruck;
//	}

}
