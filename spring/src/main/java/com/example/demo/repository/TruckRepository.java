package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.Truck;

@Mapper
public interface TruckRepository {
	public int insert(Truck truck);

	public int update(Truck truck);

	public int delete(String tId);

	public List<Truck> findAll();

	public Truck findOneById(String tId);

	public List<Truck> findAllByAddr(String tAddress);
	
	//트럭의 평균값을 찾음
	public int findAvgByTruck(String tId);

	//트럭의 평균 평점을 업데이트
	public int updateAvg(String tId);
}
