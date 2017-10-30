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

import com.example.demo.domain.Member;
import com.example.demo.repository.MemberRepository;
import com.example.demo.service.MemberService;

@RestController
@RequestMapping("/members")
public class MemberController {
	@Autowired
	private MemberRepository memberRepository;
	@Autowired
	private MemberService memberService;

	@PostMapping(value = { "/regist" }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public Object add(@RequestBody Member member) {
		Member m = memberService.checkEmailDuplicate(member);
		if (m.getMError() == null) {
			memberRepository.insert(m);
			System.out.println("회원가입");
			return m;
		} else {
			return m;
		}
	}
	
	//이메일 중복체크
	@PostMapping(value = { "/regist/check_email" }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public String checkEmailDuplicate(@RequestBody Member member) {
		Member m = memberService.checkEmailDuplicate(member);
		if (m.getMError() == null) {
			return "사용가능한 이메일입니다.";
		} else {
			return m.getMError();
		}
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
		System.out.println("MemberController # getEmail() # m_email=" + email);
		return memberRepository.findOneByEmail(email);
	}

}
