package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Review;
import com.example.demo.repository.ReviewRepository;
import com.example.demo.repository.TruckRepository;

@RestController
@RequestMapping("/reviews")
public class ReviewController {
	@Autowired
	private ReviewRepository reviewRepository;
	@Autowired
	private TruckRepository truckRepository;
	
	@PostMapping(value = { "" }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public Object add(@RequestBody Review review) {
		try {
			reviewRepository.insert(review);
			System.out.println("리뷰등록완료");
			truckRepository.updateAvg(review.getRTruck());//리뷰 등록시, 트럭의 총평점 update
			return "success";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "fail";
	}
	
	@PostMapping(value = { "/{rId}" }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public Object modify(@RequestBody Review review) {
		reviewRepository.update(review);
		System.out.println("리뷰등록완료");
		truckRepository.updateAvg(review.getRTruck());//리뷰등록시, 트럭의 총평점 update
		System.out.println("트럭평점등록완료");
		
		return reviewRepository.findAll();
	}
	
	@DeleteMapping("/{rId}")
	public void remove(@PathVariable int rId) {
		System.out.println(rId);
		reviewRepository.delete(rId);
	}
	
	@GetMapping("")
	public List<Review> getAll(){
		return reviewRepository.findAll();
	}

	@GetMapping("/member/{r_member:.+}")
	public List<Review> getMyReview(@PathVariable String r_member) {
		System.out.println("들림 "+ r_member);
		return reviewRepository.findMemberReview(r_member);
	}
	
	@GetMapping("/truck/{r_truck}")
	public List<Review> getTruckReview(@PathVariable String r_truck) {
		return reviewRepository.findTruckReview(r_truck);
	}
}
