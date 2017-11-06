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
	
	//이메일 중복일때 사용
	private String mError;

}
