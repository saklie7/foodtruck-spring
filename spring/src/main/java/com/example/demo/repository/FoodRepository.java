package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.Food;

@Mapper
public interface FoodRepository {
	
	public int insert(Food food);

	public int update(Food food);

	public int delete(int fId);

	// public List<Food> findAll(); //==> 필요할까요?
	public List<Food> findAllByTruck(String fTruck);
	public Food findOneById(int fId);
}
