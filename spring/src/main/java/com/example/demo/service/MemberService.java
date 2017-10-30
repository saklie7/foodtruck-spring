package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.Member;
import com.example.demo.repository.MemberRepository;

@Service
public class MemberService {
	@Autowired
	private MemberRepository memberRepository;
	
	public Member checkEmailDuplicate(Member member) {
		Member m = memberRepository.findOneByEmail(member.getMEmail());
		if(m !=  null) {
			m.setMError("이미 가입된 이메일입니다.");
			return m;
		} 
		return member;
	}
	
//	public Hotlist checkDuplicate(Hotlist hotlist) {
//		//회원이 즐겨찾기한 트럭의 정보를 모음
//		List<Hotlist> h = hotlistRepository.findAllByMember(hotlist.getHMember());
//		
//		if (h == null) {
//			System.out.println("1");
//			return hotlist;
//		} else {
//			for (int i = 0; i < h.size(); i++) {
//				if (h.get(i).getHTruck().equals(hotlist.getHTruck())) {
//					hotlist.setHError("Cannot add the duplicated favorite truck.");
//					System.out.println("2 ::"+hotlist);
//				} 
//			}
//			System.out.println("3::"+hotlist);
//			return hotlist;
//		}
}
