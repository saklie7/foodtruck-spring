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
public class Canival {

	private int cId;
	private String cTitle;
	private String cContent;
	private String cImage;
	private String cSdate;
	private String cEdate;
	private int cViewcnt;

//	public Canival() {
//		// TODO Auto-generated constructor stub
//	}
//
//	public Canival(int cId, String cTitle, String cContent, String cImage, String cSdate, String cEdate) {
//		super();
//		this.cId = cId;
//		this.cTitle = cTitle;
//		this.cContent = cContent;
//		this.cImage = cImage;
//		this.cSdate = cSdate;
//		this.cEdate = cEdate;
//	}
//
//	@Override
//	public String toString() {
//		return "Canival [cId=" + cId + ", cTitle=" + cTitle + ", cContent=" + cContent + ", cImage=" + cImage
//				+ ", cSdate=" + cSdate + ", cEdate=" + cEdate + "]";
//	}
//
//	public int getcId() {
//		return cId;
//	}
//
//	public void setcId(int cId) {
//		this.cId = cId;
//	}
//
//	public String getcTitle() {
//		return cTitle;
//	}
//
//	public void setcTitle(String cTitle) {
//		this.cTitle = cTitle;
//	}
//
//	public String getcContent() {
//		return cContent;
//	}
//
//	public void setcContent(String cContent) {
//		this.cContent = cContent;
//	}
//
//	public String getcImage() {
//		return cImage;
//	}
//
//	public void setcImage(String cImage) {
//		this.cImage = cImage;
//	}
//
//	public String getcSdate() {
//		return cSdate;
//	}
//
//	public void setcSdate(String cSdate) {
//		this.cSdate = cSdate;
//	}
//
//	public String getcEdate() {
//		return cEdate;
//	}
//
//	public void setcEdate(String cEdate) {
//		this.cEdate = cEdate;
//	}

}
