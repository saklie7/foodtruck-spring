package com.example.demo.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.domain.Truck;
import com.example.demo.repository.TruckRepositoryImpl;
import com.example.demo.service.StorageService;

@RestController
//@RequestMapping("/trucks")
public class TruckController {
	@Autowired
	private TruckRepositoryImpl truckRepository;
	
	@Autowired
	private StorageService storageService;
	
//	@PostMapping(value={""}, consumes={MediaType.APPLICATION_JSON_VALUE})
//	public Truck add(@RequestBody Truck truck) {
//		truckRepository.insert(truck);
//		//등록한 트럭 정보를 다시 클라이언트로 되돌려 줌.
//		return truck;
//	}
	
	@PostMapping("/trucks/post")
//	@RequestMapping(value="/trucks/post" , method = {RequestMethod.GET, RequestMethod.POST})
//	@PostMapping(value = { "/trucks/post" }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<String> handleFileUpload(
			@RequestParam("name") String name,
			@RequestParam("open") String open,
			@RequestParam("close") String close,
			@RequestParam("lat") String lat,
			@RequestParam("lng") String lng,
			@RequestParam("comment") String comment,
			@RequestParam("address") String address,
			@RequestParam("file") MultipartFile file,
			@RequestParam("email") String email
			) {
		System.out.println("푸드트럭 컨트롤러 POST");
		System.out.println(name);
		System.out.println(open);
		System.out.println(close);
		System.out.println(lat);
		System.out.println(lng);
		System.out.println(comment);
		System.out.println(address);
		System.out.println(file);
		System.out.println(email);
		
//		truckRepository.insert(name, open, close, lat, lng, file);
		try {
			System.out.println("-----------try------");
			storageService.store(name, open, close, lat, lng, comment, address, file, email);
		} catch (IOException e) {
			System.out.println("-----------catch------");
			e.printStackTrace();
		}
//		return truck;
		return null;
	}
	
	//트럭 정보수정
	@PostMapping(value = { "/trucks/update" }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public int modify(@RequestBody Truck truck) {
		return truckRepository.update(truck);
	}
	
	@GetMapping("/trucks/{lat}/{lng}")
	public List<Truck> address(@PathVariable double lat, @PathVariable double lng) {
		int t = (int) lat;
		int g = (int) lng;
		System.out.println(truckRepository.find(t,g));
		return truckRepository.find(t,g);
		
	}
	
	
	@DeleteMapping("/trucks/{tId}")
	public int remove(@PathVariable int tId) {
		System.out.println(tId+"를 삭제합니다.");
		return truckRepository.delete(tId);
	}
	
	@GetMapping("/trucks")
	public List<Truck> getAll() {
		System.out.println(truckRepository.findAll());
		 return truckRepository.findAll();
		
	}
	
	@GetMapping("/trucks/find/{key}")
	public List<Truck> getKey(@PathVariable String key) {
		System.out.println(key);
		System.out.println(truckRepository.keyfind(key));
		return truckRepository.keyfind(key);
	}
	
	@GetMapping("/trucks/{tId}")
	public Truck getTruckById(@PathVariable int tId) {
		//트럭을 찾을 때, 평균값을 산출
		truckRepository.updateAvg(tId);
		System.out.println(truckRepository.findOneById(tId));
		return truckRepository.findOneById(tId);
	}
	
//	@GetMapping("/search/{t_address}")
//	public List<Truck> getAllByAddress(@PathVariable String t_address) {
//		return truckRepository.findAllByAddr(t_address);
//	}
	
	

}
