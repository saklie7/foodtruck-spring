package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.Hotlist;
import com.example.demo.repository.HotlistRepository;

@Service
public class HotlistService {
	@Autowired
	private HotlistRepository hotlistRepository;
	
	public Hotlist checkDuplicate(Hotlist hotlist) {
		//회원이 즐겨찾기한 트럭의 정보를 모음
		List<Hotlist> h = hotlistRepository.findAll(hotlist.getHMember());
		
		if (h == null) {
			System.out.println("1");
			return hotlist;
		} else {
			for (int i = 0; i < h.size(); i++) {
				if (h.get(i).getHTruck() == (hotlist.getHTruck())) {
					hotlist.setHError("이미 등록한 트럭입니다.");
					System.out.println("2 ::"+hotlist);
				} 
			}
			System.out.println("3::"+hotlist);
			return hotlist;
		}
	}
}
