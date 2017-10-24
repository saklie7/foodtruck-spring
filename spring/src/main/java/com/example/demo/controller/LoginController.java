package com.example.demo.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Login;
import com.example.demo.domain.Member;
import com.example.demo.repository.MemberRepository;
import com.example.demo.service.LoginService;

@RestController
@RequestMapping("/members")
public class LoginController {

	@Autowired
	private MemberRepository memberRepository;
	
	@Autowired
	private LoginService loginService;
	
	@PostMapping("/login")
	public Object postMemberLogin(@RequestBody Login login, HttpSession session) {
		System.out.println("1 : "+login);
		loginService.authenticate(login);
		
		Member member = new Member();
		
		if(login.getMError() == null) {
			member = memberRepository.findOneByEmail(login.getMEmail());
			System.out.println("loginController # member : " + member);
			session.setAttribute("member", member);
			return member;
		}
		System.out.println("loginController # login : " + login);
		return login;
	}
	
//	@PostMapping(value = { "/api" }, consumes = { MediaType.APPLICATION_JSON_VALUE })
//	public String login(@RequestBody Login login, HttpSession session) {
//		System.out.println("login() # login=" + login.getMEmail() + ", " + login.getMPassword());
//		
//		loginService.authenticate(login);
//
//		if (login.getMError() != null) {
//			System.out.println("login.getMError()=" + login.getMError());
//			
//			return login.getMError();
//		} else {
//			Member m = memberRepository.findOneByEmail(login.getMEmail());
//			
//			session.setAttribute("currentUser", m);
//			System.out.println("session.getAttribute() = " + session.getAttribute("currentMember"));
//			
//			return (String) session.getAttribute("currentUser");
//		}
//	}
	
//	@RequestMapping(
//            value = "/login",
//            method = RequestMethod.POST,
//            produces = MediaType.APPLICATION_JSON_VALUE,
//            consumes = MediaType.APPLICATION_JSON_VALUE)
//    public ResponseEntity<?> login(@RequestBody Member member, HttpSession session) {
//		System.out.println(member);
//		System.out.println(StringUtils.isEmpty(member.getMEmail()));
//        if (StringUtils.isEmpty(member.getMEmail()) || StringUtils.isEmpty(member.getMPassword())) {
//        	System.out.println("1");
//            return new ResponseEntity<>(new Member(), HttpStatus.OK);
//        }
//        if (memberRepository.findOneByEmailAndPassword(member.getMEmail(), member.getMPassword()) == null){
//        	System.out.println("2");
//        	return new ResponseEntity<>(new Member(), HttpStatus.OK);
//        }
//        System.out.println("3");
//        Member m = memberRepository.findOneByEmail(member.getMEmail());
//        System.out.println(m);
//        session.setAttribute("member", m);
//        return new ResponseEntity<>(session.getAttribute("member"), HttpStatus.OK);
//    }
	

	@GetMapping("/logout")
	public void getLogout(HttpSession session) {
		session.removeAttribute("member");
//		return null;
	}

}
