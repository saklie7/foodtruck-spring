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

import com.example.demo.domain.Canival;
import com.example.demo.repository.CanivalRepository;

@RestController
public class CanivalController {

	@Autowired
	private CanivalRepository canivalRepository;

	// insert
	@PostMapping(value={"/canival"}, consumes={MediaType.APPLICATION_JSON_VALUE})
	public String add(@RequestBody Canival canival) {
		try {
			canivalRepository.insert(canival);
		} catch (Exception e) {
		}
		return null;
	}
	
	// update
	@PostMapping(value={"/canival/{cTitle}"}, consumes={MediaType.APPLICATION_JSON_VALUE})
	public Object modify(@RequestBody Canival canival) {
		canivalRepository.update(canival);
		return canivalRepository.findOneByTitle(canival.getCTitle());
	}
	
	// delete
	@DeleteMapping(value={"/canival/{cTitle}"}, consumes={MediaType.APPLICATION_JSON_VALUE})
	public Object remove(@RequestBody Canival canival) {
		System.out.println(canival + "를 삭제합니다.");
		return canivalRepository.delete(canival);
	}
	
	//findAll
	@GetMapping("/canival")
	public List<Canival> getAll() {
		return canivalRepository.findAll();
	}
	
	//findOneByTitle
	@GetMapping("/canival/{cTitle}")
	public Canival getTitle(@PathVariable String cTitle) {
		return canivalRepository.findOneByTitle(cTitle);
	}
	
}
