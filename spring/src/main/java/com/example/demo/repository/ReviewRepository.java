package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.domain.Review;

//@Mapper
public interface ReviewRepository {
	
	public int insert(String comment, MultipartFile image, String unique, String score, String email, String truck);

	// 코멘트랑 별점만 수정 가능
	public int update(Review review);

	public int delete(int rId);

	public List<Review> findAll();
	
	// 내가 쓴 리뷰
	public List<Review> findMemberReview(String rMember); 

	// 해당 트럭 리뷰
	public List<Review> findTruckReview(int rTruck); 

}
