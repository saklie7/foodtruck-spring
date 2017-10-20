package com.example.backup;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.domain.Member;
import com.example.demo.repository.MemberRepository;

@Repository
public class MemberRepositoryImpl implements MemberRepository {
	@Autowired
	private MemberRepository memberRepository;
	
	@Override
	public int insert(Member member) {
		return memberRepository.insert(member);
	}

	@Override
	public int update(Member member) {
		return memberRepository.update(member);
	}

	@Override
	public int delete(String mEmail) {
		return memberRepository.delete(mEmail);
	}

	@Override
	public boolean isValidUser(Member member) {
		return memberRepository.isValidUser(member);
	}

	@Override
	public List<Member> findAll() {
		return memberRepository.findAll();
	}

	@Override
	public Member findOneByEmail(String mEmail) {
		return memberRepository.findOneByEmail(mEmail);
	}

}
