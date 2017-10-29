package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.Truck;
import com.example.demo.repository.TruckRepository;

@Service
public class TruckService {
	@Autowired
	private TruckRepository truckRepository;
	
	//auto-increment 사용으로 중복체크 필요없음
	public Truck checkTruckDuplicate(Truck truck) {
		return null;
	}
	
}
