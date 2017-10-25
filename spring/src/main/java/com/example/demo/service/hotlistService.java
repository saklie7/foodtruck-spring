package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.domain.Hotlist;
import com.example.demo.domain.Overlap;
import com.example.demo.repository.HotlistRepository;

@Service
public class hotlistService {
	@Autowired
	private HotlistRepository hotlistRepository;
	
	public void checkOverlap(@RequestBody Overlap overlap) {
		List<Hotlist> hotlist = hotlistRepository.findAllByMember(overlap.getHMember());
		
		if (hotlist == null) {
			overlap.setHError(null);
		} else {
			for (int i = 0; i < hotlist.size(); i++) {
				if(hotlist.get(i).getHTruck().equals(overlap.getHTruck())){
					overlap.setHError("Cannot add the duplicated favorite truck.");
				} else {
					overlap.setHError(null);
				}
			}
		}
		
		
//		Member member = memberRepository.findOneByEmail(login.getMEmail());
//		
//		if (member == null) {
//			login.setMError("Email does not exist.");
//		} else {
//			if (!member.getMPassword().equals(login.getMPassword())) {
//				login.setMError("Password is not correct.");
//			} else {
//				login.setMError(null);
//			}
//		}
	}
}
