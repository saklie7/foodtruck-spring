package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Truck;
import com.example.demo.repository.TruckRepository;

@RestController
public class TruckController {
	@Autowired
	private TruckRepository truckRepository;
	
	@PostMapping(value={"/trucks"}, consumes={MediaType.APPLICATION_JSON_VALUE})
	public String add(@RequestBody Truck truck) {
		try {
			truckRepository.insert(truck);
		} catch (Exception e) {
		}
		return null;
	}
	
	@PostMapping(value = { "/trucks/{t_id}" }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public Object modify(@RequestBody Truck truck) {
		truckRepository.update(truck);
		return null;
	}
	
	@GetMapping("/trucks")
	public List<Truck> getAll() {
		return truckRepository.findAll();
	}
}
