package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.Canival;

@Mapper
public interface CanivalRepository {
	
	public int insert(Canival canival);
	
	public int update(Canival canival);

	public int delete(Canival canival);
	
	public List<Canival> findAll(); // 전체 축제 정보 가져와서 화면에 뿌릴 때

	public Canival findOneByTitle(String cTitle); // 전체 축제 정보 중 특정 축제 검색할 때

}
