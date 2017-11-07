package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.example.demo.domain.Support;

@Mapper
public interface SupportRepository {
	
	// 전체 문의 글 리스트 볼 수 있는 페이지, 작성일 기준 역순으로 정렬
	@Select("select * from support order by s_id desc")
	public List<Support> findAll(); 

	// 전체 문의 글 중 내가 쓴 문의
	@Select("select * from support where s_member = #{sMember}")
	public List<Support> findOneBySmember(String sMember); 
	
	// 전체 문의 정보 중 특정 문의글 검색할 때
	@Select("select * from support where s_id = #{sId}")
	public Support findOneBySid(int sId); 
	
	// 문의 등록
	@Insert("insert into support(s_title, s_content, s_date, s_registype, s_member) "
			+ "values(#{sTitle}, #{sContent}, CURDATE(), #{sRegistype}, #{sMember})")
	public int insert(Support support); 
	
	// 문의 수정
	@Update("update support set s_title = #{sTitle}, s_content = #{sContent}" + "where s_id = #{sId}")
	public int update(Support support); 
	
	// 문의 삭제
	@Delete("delete from support where s_id = #{sId}")
	public int delete(int sId); 
	
//	// 전체 문의 글 수 표시
//	@Select("select count(*) support")
//	public int count();
	
}
