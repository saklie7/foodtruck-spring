package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.domain.Review;
import com.example.demo.repository.ReviewRepositoryImpl;
import com.example.demo.repository.TruckRepositoryImpl;
import com.example.demo.service.ReviewService;

@RestController
@RequestMapping("/reviews")
public class ReviewController {
	@Autowired
	private ReviewRepositoryImpl reviewRepository;
	@Autowired
	private TruckRepositoryImpl truckRepository;
	@Autowired
	private ReviewService reviewService;
	
	
	//리뷰등록(이미지 등록x)
//	@PostMapping(value = { "" }, consumes = { MediaType.APPLICATION_JSON_VALUE })
//	public Object add(@RequestBody Review review) {
//		System.out.println(review);
//		int num = reviewRepository.insert(review);
//		System.out.println("리뷰등록완료");
//		System.out.println(review.getRTruck());
//
//		if (num == 1) {
//			truckRepository.updateAvg(review.getRTruck());// 리뷰 등록시, 트럭의 총평점 update
//			System.out.println("avg update");
//			return "successful -- 1";
//		}
//		return "successful --2";
//
//		// try {
//		// reviewRepository.insert(review);
//		// System.out.println("리뷰등록완료");
//		// truckRepository.updateAvg(review.getRTruck());//리뷰 등록시, 트럭의 총평점
//		// update
//		// return "success";
//		// } catch (Exception e) {
//		// e.printStackTrace();
//		// }
//		// return "fail";
//	}
	
	
	//리뷰등록(이미지 등록o)
	@PostMapping()
	public ResponseEntity<String> handleFileUpload(
			@RequestParam("comment") String comment,
			@RequestParam("image") MultipartFile image,
			@RequestParam("score") String score,
			@RequestParam("email") String email,
			@RequestParam("truck") String truck
			) {
		System.out.println("리뷰등록 POST");
		System.out.println(comment);
		System.out.println(image);
		System.out.println(score);
		System.out.println(email);
		System.out.println(truck);
		
		try {
			System.out.println("-----------try------");
			reviewService.store(comment, image, score, email, truck);
		} catch (Exception e) {
			System.out.println("-----------catch------");
			e.printStackTrace();
		}
		return null;
	}

	@PostMapping(value = { "/{rId}" }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public Object modify(@RequestBody Review review) {
		reviewRepository.update(review);
		System.out.println("리뷰수정완료");
		truckRepository.updateAvg(review.getRTruck());// 리뷰등록시, 트럭의 총평점 update
		System.out.println("트럭평점수정완료");

		return reviewRepository.findAll();
	}

	@DeleteMapping("/{rId}")
	public String remove(@PathVariable int rId) {
		System.out.println("review remove rId= " + rId);

		int num = reviewRepository.delete(rId);
//		System.out.println("num=" + num);

		if (num == 1) {
			return "deleted";
		} else {
			return "fail";
		}
	}

	@GetMapping("")
	public List<Review> getAll() {
		return reviewRepository.findAll();
	}

	@GetMapping("/member/{r_member:.+}")
	public List<Review> getMyReview(@PathVariable String r_member) {
//		System.out.println("review 들림 " + r_member);
		return reviewRepository.findMemberReview(r_member);
	}

	@GetMapping("/truck/{r_truck}")
	public List<Review> getTruckReview(@PathVariable int r_truck) {
		List<Review> review = reviewRepository.findTruckReview(r_truck);
		System.out.println(review.isEmpty());
		if(review.isEmpty()) {
			Review r = new Review("등록된 리뷰가 없습니다.");
			review.add(r);
			return review;
		} else {
			return review;
		}
	}
}
