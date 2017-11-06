package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.domain.Truck;

//@Mapper
public interface TruckRepository {
	public int insert(String name, String open, String close, String lat, String lng, String comment, String address,
			MultipartFile file, String unique, String email);

	public int update(Truck truck);

	// 트럭 위치 정보 수정 (위도, 경도 사용)
	// public int updateTruckLocation(Truck truck);

	public int delete(int tId);

	// 트럭의 평균 값을 업데이트
	public int updateAvg(int tId);

	// 등록되어 있는 모든 트럭(주소 지정 x)
	public List<Truck> findAll();

	// 키워드(지역명) 주변 트럭(주소 지정o)
	public List<Truck> keyfind(String key);

	public Truck findOneById(int tId);

	// 사업자 아이디로 자기 트럭찾기
	public List<Truck> findOneByMember(String tMember);
	
	

}
