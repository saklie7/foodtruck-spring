package com.example.backup;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.domain.Review;
import com.example.demo.repository.ReviewRepository;

@Repository
public class ReviewRepositoryImpl implements ReviewRepository {
	@Autowired
	private ReviewRepository reviewRepository;
	
	@Override
	public int insert(Review review) {
		return reviewRepository.insert(review);
	}

	@Override
	public int update(Review review) {
		return reviewRepository.update(review);
	}

	@Override
	public int delete(String r_id) {
		return reviewRepository.delete(r_id);
	}

	@Override
	public List<Review> findAll() {
		return reviewRepository.findAll();
	}

	@Override
	public List<Review> findMyReview(String r_member) {
		return reviewRepository.findMyReview(r_member);
	}

	@Override
	public List<Review> findTruckReview(String r_truck) {
		return reviewRepository.findTruckReview(r_truck);
	}

}
