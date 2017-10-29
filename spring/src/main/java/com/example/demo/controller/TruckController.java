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

import com.example.demo.domain.Truck;
import com.example.demo.repository.TruckRepository;
import com.example.demo.service.TruckService;

@RestController
@RequestMapping("/trucks")
public class TruckController {
	@Autowired
	private TruckRepository truckRepository;
//	@Autowired
//	private TruckService truckService;
	
	@PostMapping(value={""}, consumes={MediaType.APPLICATION_JSON_VALUE})
	public Truck add(@RequestBody Truck truck) {
		truckRepository.insert(truck);
		//등록한 트럭 정보를 다시 클라이언트로 되돌려 줌.
		return truck;
	}
	
	//트럭 정보수정
	@PostMapping(value = { "/update" }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public int modify(@RequestBody Truck truck) {
		return truckRepository.update(truck);
	}
	
	//트럭 위치수정
	@PostMapping(value = { "/update/map" }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public Object modifyLocal(@RequestBody Truck truck) {
		return truckRepository.updateLocal(truck);
//		return null;
	}
	
	@DeleteMapping("/{tId}")
	public int remove(@PathVariable int tId) {
		System.out.println(tId+"를 삭제합니다.");
		return truckRepository.delete(tId);
	}
	
	@GetMapping("")
	public List<Truck> getAll() {
		return truckRepository.findAll();
	}
	
	@GetMapping("/{tId}")
	public Truck getTruckById(@PathVariable int tId) {
		//트럭을 찾을 때, 평균값을 산출
		truckRepository.updateAvg(tId);
		System.out.println(truckRepository.findOneById(tId));
		return truckRepository.findOneById(tId);
	}
	
	@GetMapping("/search/{t_address}")
	public List<Truck> getAllByAddress(@PathVariable String t_address) {
		return truckRepository.findAllByAddr(t_address);
	}
	

}
