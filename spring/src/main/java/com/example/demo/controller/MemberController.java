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

@RestController
@RequestMapping("/members")
public class MemberController {
	@Autowired
	private MemberRepository memberRepository;

	@PostMapping(value = { "" }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public String add(@RequestBody Member member) {
		try {
			memberRepository.insert(member);
			return "1";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "0";
	}

	@PostMapping(value = { "/{email}" }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public Object modify(@RequestBody Member member) {
		memberRepository.update(member);
		System.out.println(memberRepository.findOneByEmail(member.getMEmail()));
		return memberRepository.findOneByEmail(member.getMEmail());
	}

	@DeleteMapping("/{email}")
	public void remove(@PathVariable String email) {
		System.out.println(email);
		memberRepository.delete(email);
	}
	
	@GetMapping
	public List<Member> getAll() {
		return memberRepository.findAll();
	}

	@GetMapping("/{email:.+}")
	public Member getEmail(@PathVariable String email) {
		System.out.println("getEmail() # m_email=" + email);
		return memberRepository.findOneByEmail(email);
	}

}
