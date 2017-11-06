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
public class Support {

	private int sId;
	private String sTitle;
	private String sContent;
	private String sDate;
	private int sRegistype;
	private String sMember;

}
