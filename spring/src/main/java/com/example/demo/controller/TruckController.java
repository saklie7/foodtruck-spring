package com.example.demo.controller;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Member;
import com.example.demo.domain.Truck;
import com.example.demo.repository.TruckRepository;
import com.example.demo.repository.TruckRepositoryImpl;

@RestController
public class TruckController {
	@Autowired
	private TruckRepositoryImpl truckRepository;
	
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
		return truckRepository.findOneById(truck.getT_id());
	}
	
	@DeleteMapping("/trucks/{t_id}")
	public void remove(@PathVariable String t_id) {
		System.out.println(t_id+"를 삭제합니다.");
		truckRepository.delete(t_id);
	}
	
	@GetMapping("/trucks")
	public List<Truck> getAll() {
		return truckRepository.findAll();
	}
	
	@GetMapping("/trucks/{t_address}")
	public List<Truck> getAddress(@PathVariable String t_address) {
		return truckRepository.findAllByAddr(t_address);
	}
	

}
