package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.Login;
import com.example.demo.domain.Member;
import com.example.demo.repository.MemberRepository;

@Service
public class LoginService {
	@Autowired
	private MemberRepository memberRepository;

	public void authenticate(Login login) {
		Member member = memberRepository.findOneByEmail(login.getMEmail());
		
		if (member == null) {
			login.setMError("Email does not exist.");
		} else {
			if (!member.getMPassword().equals(login.getMPassword())) {
				login.setMError("Password is not correct.");
			} else {
				login.setMError(null);
			}
		}
	}
}
