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
		List<Hotlist> h = hotlistRepository.findAllByMember(hotlist.getHMember());
		
		if (h == null) {
			System.out.println("1");
			return hotlist;
		} else {
			for (int i = 0; i < h.size(); i++) {
				if (h.get(i).getHTruck() == (hotlist.getHTruck())) {
					hotlist.setHError("Cannot add the duplicated favorite truck.");
					System.out.println("2 ::"+hotlist);
				} 
			}
			System.out.println("3::"+hotlist);
			return hotlist;
		}
		
//		List<Hotlist> hotlist = hotlistRepository.findAllByMember(overlap.getHMember());
//		
//		if (hotlist == null) {
//			overlap.setHError(null);
//		} else {
//			for (int i = 0; i < hotlist.size(); i++) {
//				if(hotlist.get(i).getHTruck().equals(overlap.getHTruck())){
//					overlap.setHError("Cannot add the duplicated favorite truck.");
//				} else {
//					overlap.setHError(null);
//				}
//			}
//		}
	}
}
