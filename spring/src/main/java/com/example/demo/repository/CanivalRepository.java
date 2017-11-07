package com.example.demo.repository;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.example.demo.domain.Canival;

//@Mapper
public interface CanivalRepository {
	
	public int insert(String title, String content, MultipartFile image, String unique, String sdate, String edate);
	
	public int update(Canival canival);

	public int delete(Canival canival);

	// 전체 축제 글 리스트 볼 수 있는 페이지, 종료일 기준 역순으로 정렬
	public List<Canival> selectAll();
	
	// 저장 후 저장한 글 다시 보여주기
	public Canival selectByMaxId();
	
	//축제글번호로 조회
	public Canival selectById(int cId);

	// 조회수 증가 처리
	public int increment(int cId);
}
