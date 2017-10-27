package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Hotlist;
import com.example.demo.domain.Truck;
import com.example.demo.repository.HotlistRepository;
import com.example.demo.repository.TruckRepository;
import com.example.demo.service.HotlistService;

@RestController
@RequestMapping("/hotlist")
public class HotlistController {
	@Autowired
	private HotlistRepository hotlistRepository;
	@Autowired
	private TruckRepository trucktRepository;
	@Autowired
	private HotlistService checkService;

	@PostMapping(value = { "/add" }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public Object add(@RequestBody Hotlist hotlist) {
		Hotlist resultHotlist = checkService.checkDuplicate(hotlist);
		System.out.println("Controller # hotlist="+resultHotlist);
		
		if (resultHotlist.getHError() == null) {
			hotlistRepository.insert(resultHotlist);
			return resultHotlist;
		} else {
			return resultHotlist;
		}
	}

	@GetMapping
	public List<Hotlist> getAll() {
		return hotlistRepository.findAll();
	}

	@GetMapping("/{hMember:.+}")
	public List<Truck> getAllByMember(@PathVariable String hMember) {
		List<Hotlist> list = hotlistRepository.findAllByMember(hMember);
		List<Truck> t = new ArrayList<>();

		// 로그인된 회원의 즐겨찾기 트럭의 상세목록 출력
		for (int i = 0; i < list.size(); i++) {
			String truck = list.get(i).getHTruck();
			t.add(trucktRepository.findOneById(truck));
		}

		for (Truck truck : t) {
			System.out.println(truck);
		}

		return t;
		// return hotlistRepository.findAllByMember(hMember);
	}

}