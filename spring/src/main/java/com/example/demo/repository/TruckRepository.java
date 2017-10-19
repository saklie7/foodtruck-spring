package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.Member;
import com.example.demo.domain.Truck;

@Mapper
public interface TruckRepository {
	public int insert(Truck truck);
	public int update(Truck truck);
	public int delete(String t_id);

	public List<Truck> findAll();
	public Member findAllByAddr(String t_address);
}
