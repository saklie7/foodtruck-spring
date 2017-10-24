package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.Support;

@Mapper
public interface SupportRepository {
	
	public int insert(Support support); // 문의 등록
	
	public int update(Support support); // 문의 수정
	
	public int delete(Support support); // 문의 삭제
	
	public Support findOneBySid(int sId); // 전체 문의 정보 중 특정 문의글 검색할 때

	public List<Support> findAll(); // 전체 문의 정보 가져와서 화면에 뿌릴 때

	public List<Support> findOneBySmember(String sMember); // 전제 문의 정보 중 내가 쓴 문의 검색할 때
	
}
