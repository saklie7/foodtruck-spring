package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.Canival;


@Mapper
public interface CanivalRepository {
	public int insert(Canival canival);
	public int update(Canival canival);
	public int delete(String c_id);

	public List<Canival> findAll();
	public Canival findOneById(String c_id);
}
