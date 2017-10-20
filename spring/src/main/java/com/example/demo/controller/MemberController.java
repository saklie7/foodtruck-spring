package com.example.demo.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Member;
import com.example.demo.repository.MemberRepository;
import com.example.demo.repository.MemberRepositoryImpl;

@RestController
public class MemberController {
	@Autowired
	private MemberRepositoryImpl memberRepository;

	@PostMapping(value = { "/members" }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public String add(@RequestBody Member member) {
		try {
			memberRepository.insert(member);
			return "1";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "0";
	}

	@PostMapping(value = { "/members/{email}" }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public Object modify(@RequestBody Member member) {
		memberRepository.update(member);
		System.out.println(memberRepository.findOneByEmail(member.getM_email()));
		return memberRepository.findOneByEmail(member.getM_email());
	}

	@DeleteMapping("/members/{email}")
	public void remove(@PathVariable String email) {
		System.out.println(email);
		memberRepository.delete(email);
	}
	
	@RequestMapping(value = { "/members/login" }, method = RequestMethod.POST)
	public Object login1(@RequestBody Member member, HttpSession session) {
		System.out.println(memberRepository.isValidUser(member));
		if (memberRepository.isValidUser(member)) {
			session.setAttribute("email", member.getM_email());
			System.out.println(session.getAttribute("email"));
			return session.getAttribute("email");
		}
		return "fail";
	}

	@GetMapping("/members")
	public List<Member> getAll() {
		return memberRepository.findAll();
	}

	@GetMapping("/members/{email:.+}")
	public Member getEmail(@PathVariable String email) {
		System.out.println("getEmail() # m_email=" + email);
		return memberRepository.findOneByEmail(email);
	}

}
