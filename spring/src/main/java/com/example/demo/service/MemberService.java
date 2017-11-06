package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.Member;
import com.example.demo.repository.MemberRepository;

@Service
public class MemberService {
	@Autowired
	private MemberRepository memberRepository;
	
	public Member checkEmailDuplicate(Member member) {
		Member m = memberRepository.findOneByEmail(member.getMEmail());
		if(m !=  null) {
			m.setMError("이미 가입된 이메일입니다.");
			return m;
		} 
		return member;
	}
}
