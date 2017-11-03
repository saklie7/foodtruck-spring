package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.domain.Truck;

//@Mapper
public interface TruckRepository {
	public int insert(String name, String open, String close, String lat, String lng, String comment, String address,
			MultipartFile file, String unique, String email);
	// public int insert(Truck truck);

	public int update(Truck truck);

	public int delete(int tId);

	public List<Truck> findAll();

	public List<Truck> find(int lat, int lng);

	public List<Truck> keyfind(String key);
	
	public Truck findOneById(int tId);

	// 필요없는 것 같음
	// public List<Truck> findAllByAddr(String tAddress);

	// 사업자 아이디로 자기 트럭찾기
	public Truck findOneByMember(String tMember);

	// 트럭의 평균 평점을 업데이트
	public int updateAvg(int tId);

}
