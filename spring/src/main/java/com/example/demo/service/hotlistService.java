package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.Hotlist;
import com.example.demo.repository.HotlistRepository;

@Service
public class hotlistService {
	@Autowired
	private HotlistRepository hotlistRepository;
	
	public void authenticate(Hotlist hotlist) {
//		Member member = memberRepository.findOneByEmail(login.getMEmail());
//		
//		if (member == null) {
//			login.setMError("Email does not exist.");
//		} else {
//			if (!member.getMPassword().equals(login.getMPassword())) {
//				login.setMError("Password is not correct.");
//			} else {
//				login.setMError(null);
//			}
//		}
	}
}
