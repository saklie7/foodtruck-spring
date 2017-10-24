package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.Hotlist;

@Mapper
public interface HotlistRepository {
	public int insert(Hotlist hotlist);

	public int delete(int hId);

	public List<Hotlist> findAllByMember(String hMember);
	
}
