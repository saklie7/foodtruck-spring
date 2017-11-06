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

import com.example.demo.domain.Support;
import com.example.demo.repository.SupportRepository;

@RestController
@RequestMapping("/supports")
public class SupportController {

	@Autowired
	private SupportRepository supportRepository;

	// insert
	@PostMapping("/post")
	public String add(@RequestBody Support support) {
		try {
			System.out.println(support);
			supportRepository.insert(support);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	// update
	@PostMapping(value = { "/update" }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public Object modify(@RequestBody Support support) {
		System.out.println(support);
		supportRepository.update(support);
		return null;
	}

	// delete
	@DeleteMapping(value = { "/delete/{sId}" }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public Object remove(@PathVariable int sId) {
		return supportRepository.delete(sId);
	}

//	 findAll
	@GetMapping()
	public List<Support> getAll() {
		return supportRepository.findAll();
	}

	// findOneBySmember 문의글 글쓴이
	@GetMapping("/member/{sMember}")
	public List<Support> getSmember(@PathVariable String sMember) {
		return supportRepository.findOneBySmember(sMember);
	}

	// findOneBySid 문의글 번호
	@GetMapping("/number/{sId}")
	public Support getSid(@PathVariable int sId) {
		return supportRepository.findOneBySid(sId);
	}
	
}
