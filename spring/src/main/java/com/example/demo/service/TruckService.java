package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.Truck;
import com.example.demo.repository.TruckRepository;

@Service
public class TruckService {
	@Autowired
	private TruckRepository truckRepository;
	
	public Truck checkTruckDuplicate(Truck truck) {
		Truck t = truckRepository.findOneByMember(truck.getTMember());
		if (t != null) {
			t.setTError("이미 등록된 트럭입니다.");
			return t;
		} else {
			return truck;
		}
	}
	
}
