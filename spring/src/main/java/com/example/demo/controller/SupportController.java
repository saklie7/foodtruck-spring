package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Support;
import com.example.demo.repository.SupportRepository;

@RestController
public class SupportController {

	@Autowired
	private SupportRepository supportRepository;

	// insert
	@PostMapping(value = { "/supports" }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public String add(@RequestBody Support support) {
		try {
			supportRepository.insert(support);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	// update
	@PostMapping(value = { "/supports/{sMember}" }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public Object modify(@RequestBody Support support) {
		supportRepository.update(support);
		return supportRepository.findOneBySmember(support.getSMember());
	}

	// delete
	@DeleteMapping(value = { "/supports/{sId}" }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public Object remove(@RequestBody Support support) {
		return supportRepository.delete(support);
	}

	// findAll
	@GetMapping
	public List<Support> getAll() {
		return supportRepository.findAll();
	}

	// findOneBySmember 문의글 글쓴이
	@GetMapping("/supports/member/{sMember}")
	public List<Support> getSmember(@PathVariable String sMember) {
		return supportRepository.findOneBySmember(sMember);
	}

	// findOneBySid 문의글 번호
	@GetMapping("/supports/number/{sId}")
	public Support getSid(@PathVariable int sId) {
		return supportRepository.findOneBySid(sId);
	}
	
}
