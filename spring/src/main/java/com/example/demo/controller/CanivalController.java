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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.domain.Canival;
import com.example.demo.repository.CanivalRepository;
import com.example.demo.service.StorageService;

@RestController
@RequestMapping("/canival")
public class CanivalController {

	@Autowired
	private CanivalRepository canivalRepository;
	@Autowired
	private StorageService storageService;

	// insert
	@PostMapping("/post")
	public Canival add(
			@RequestParam("title") String cTitle, 
			@RequestParam("content") String cContent,
			@RequestParam("sdate") String cSdate,
			@RequestParam("edate") String cEdate,
			@RequestParam("image") MultipartFile cImage
			) {
		System.out.println(cTitle);
		System.out.println(cContent);
		System.out.println(cImage);
		System.out.println(cSdate);
		System.out.println(cEdate);
		try {
			storageService.store(cTitle, cContent, cImage, cSdate, cEdate);
		} catch (Exception e) {
		}
		return canivalRepository.selectByMaxId();
	}
	
	// update
	@PostMapping("/update/{cId}")
	public Object modify(
			@PathVariable int cId,
			@RequestParam("cTitle") String cTitle, 
			@RequestParam("cContent") String cContent,
			@RequestParam("cSdate") String cSdate,
			@RequestParam("cEdate") String cEdate,
			@RequestParam("cImage") MultipartFile cImage
			) {
		try {
			System.out.println("수정전");
			storageService.store(cId, cTitle, cContent, cImage, cSdate, cEdate);
			System.out.println("수정완료");
		} catch (Exception e) {
			
		}
		
		return canivalRepository.selectById(cId);
	}

	// delete
	@DeleteMapping("/delete/{cId}")
	public Object remove(@RequestBody Canival canival) {
		System.out.println(canival + "를 삭제합니다.");
		return canivalRepository.delete(canival);
	}

	// findAll
	@GetMapping("")
	public List<Canival> getAll() {
		return canivalRepository.selectAll();
	}
	
	// findOneByTitle : 글내용 상세뷰
   @GetMapping("/view/{cId}")
   public Canival getTitle(@PathVariable int cId) {
      canivalRepository.increment(cId);
      return canivalRepository.selectById(cId);
   }
}
