package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Review;
import com.example.demo.repository.ReviewRepository;

@RestController
public class ReviewController {
	@Autowired
	private ReviewRepository reviewRepository;
	
	@PostMapping(value = { "/reviews" }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public String add(@RequestBody Review review) {
		try {
			reviewRepository.insert(review);
			return "1";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "0";
	}
	
	@PostMapping(value = { "/reviews/{rId}" }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public Object modify(@RequestBody Review review) {
		reviewRepository.update(review);
		//리뷰를 수정하면 리뷰 리스트를 보여줘야하는데 이렇게 하남?
		return reviewRepository.findAll();
	}
	
	@DeleteMapping("/reviews/{rId}")
	public void remove(@PathVariable int rId) {
		System.out.println(rId);
		reviewRepository.delete(rId);
	}
	
	@GetMapping("/reviews")
	public List<Review> getAll(){
		return reviewRepository.findAll();
	}

	@GetMapping("/reviews/member/{r_member:.+}")
	public List<Review> getMyReview(@PathVariable String r_member) {
		return reviewRepository.findMyReview(r_member);
	}
	
	@GetMapping("/reviews/truck/{r_truck}")
	public List<Review> getTruckReview(@PathVariable String r_truck) {
		return reviewRepository.findTruckReview(r_truck);
	}
}
