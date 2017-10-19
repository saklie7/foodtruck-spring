package com.example.demo.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

public class Member {
	
	private String m_email;
	private String m_password;
	private String m_image;
	private String m_nickname;
	private int m_registype;
	
	
	public String getM_email() {
		return m_email;
	}
	public void setM_email(String m_email) {
		this.m_email = m_email;
	}
	public String getM_password() {
		return m_password;
	}
	public void setM_password(String m_password) {
		this.m_password = m_password;
	}
	public String getM_image() {
		return m_image;
	}
	public void setM_image(String m_image) {
		this.m_image = m_image;
	}
	public String getM_nickname() {
		return m_nickname;
	}
	public void setM_nickname(String m_nickname) {
		this.m_nickname = m_nickname;
	}
	public int getM_registype() {
		return m_registype;
	}
	public void setM_registype(int m_registype) {
		this.m_registype = m_registype;
	}
	public Member(String m_email, String m_password, String m_image, String m_nickname, int m_registype) {
		super();
		this.m_email = m_email;
		this.m_password = m_password;
		this.m_image = m_image;
		this.m_nickname = m_nickname;
		this.m_registype = m_registype;
	}
	
}
