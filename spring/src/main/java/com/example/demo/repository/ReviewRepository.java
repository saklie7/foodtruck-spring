package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.Review;

@Mapper
public interface ReviewRepository {
	public int insert(Review review);

	public int update(Review review);// 코멘트랑 별점만 수정

	public int delete(int r_id);

	public List<Review> findAll();

	public List<Review> findMyReview(String r_member); // 내가 쓴 리뷰

	public List<Review> findTruckReview(String r_truck); // 해당 트럭 리뷰
}
