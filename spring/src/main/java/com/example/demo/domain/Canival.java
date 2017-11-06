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

}
