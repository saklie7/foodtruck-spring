package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Food;
import com.example.demo.domain.Review;
import com.example.demo.repository.FoodRepository;

@RestController
public class FoodController {
	@Autowired
	private FoodRepository foodRepository;
	
	@PostMapping(value = { "/foods" }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public String add(@RequestBody Food food) {
		try {
			foodRepository.insert(food);
			return "1";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "0";
	}
	
	@PostMapping(value = { "/foods/{fId}" }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public Object modify(@RequestBody Food food) {
		foodRepository.update(food);
		//리뷰를 수정하면 리뷰 리스트를 보여줘야하는데 이렇게 하남?
		return foodRepository.findOneById(food.getFId());
	}
	
	@GetMapping("/foods/{fTruck}")
	public List<Food> getAllByTruck(@PathVariable String fTruck) {
		return foodRepository.findAllByTruck(fTruck);
	}
}
