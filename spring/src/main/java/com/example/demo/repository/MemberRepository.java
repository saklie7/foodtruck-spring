package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.Member;

@Mapper
public interface MemberRepository {
	public int insert(Member member);
	public int update(Member member);
	public int delete(String mEmail);

	public boolean isValidUser(Member member);

	public List<Member> findAll();
	public Member findOneByEmail(String mEmail);
}
