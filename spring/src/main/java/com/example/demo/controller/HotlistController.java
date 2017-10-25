package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Hotlist;
import com.example.demo.repository.HotlistRepository;

@RestController
@RequestMapping("/hotlist")
public class HotlistController {
	@Autowired
	private HotlistRepository hotlistRepository;
	
	@PostMapping
	public Hotlist add(Hotlist hotlist) {
		return null;
	}
	
	@GetMapping
	public List<Hotlist> getAll() {
		return hotlistRepository.findAll();
	}
	
	@GetMapping("/{hMember}")
	public List<Hotlist> getAllByMember(@PathVariable String hMember) {
		return hotlistRepository.findAllByMember(hMember);
	}
	
	
	
}
