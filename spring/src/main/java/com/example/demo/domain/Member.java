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
public class Member {

	private String mEmail;
	private String mPassword;
	private String mImage;
	private String mNickname;
	private int mRegistype;
	private String mError;

//	public Member() {
//		// TODO Auto-generated constructor stub
//	}
//
//	public Member(String mEmail, String mPassword, String mImage, String mNickname, int mRegistype) {
//		super();
//		this.mEmail = mEmail;
//		this.mPassword = mPassword;
//		this.mImage = mImage;
//		this.mNickname = mNickname;
//		this.mRegistype = mRegistype;
//	}
//
//	@Override
//	public String toString() {
//		return "Member [mEmail=" + mEmail + ", mPassword=" + mPassword + ", mImage=" + mImage + ", mNickname="
//				+ mNickname + ", mRegistype=" + mRegistype + "]";
//	}
//
//	public String getmEmail() {
//		return mEmail;
//	}
//
//	public void setmEmail(String mEmail) {
//		this.mEmail = mEmail;
//	}
//
//	public String getmPassword() {
//		return mPassword;
//	}
//
//	public void setmPassword(String mPassword) {
//		this.mPassword = mPassword;
//	}
//
//	public String getmImage() {
//		return mImage;
//	}
//
//	public void setmImage(String mImage) {
//		this.mImage = mImage;
//	}
//
//	public String getmNickname() {
//		return mNickname;
//	}
//
//	public void setmNickname(String mNickname) {
//		this.mNickname = mNickname;
//	}
//
//	public int getmRegistype() {
//		return mRegistype;
//	}
//
//	public void setmRegistype(int mRegistype) {
//		this.mRegistype = mRegistype;
//	}

}
