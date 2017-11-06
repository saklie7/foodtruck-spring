package com.example.demo.service;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Random;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.repository.CanivalRepositoryImpl;
import com.example.demo.repository.FoodRepositoryImpl;
import com.example.demo.repository.ReviewRepositoryImpl;
import com.example.demo.repository.TruckRepositoryImpl;

@Service
public class StorageService {

	@Autowired
	private TruckRepositoryImpl truckRepository;
	@Autowired
	private ReviewRepositoryImpl reviewRepository;
	@Autowired
	private FoodRepositoryImpl foodRepository;
	@Autowired
	private CanivalRepositoryImpl canivalRepository;
	
	Logger log = LoggerFactory.getLogger(this.getClass().getName());
	private final Path rootLocation = Paths.get("src/main/resources/static/image");
	
	// 트럭 insert
	public void store(String name, String open, String close, String lat, String lng, String comment, String address,
			MultipartFile file, String email) throws IOException {
		long i = System.currentTimeMillis();
		
		try {
			String unique = String.valueOf(i);
			System.out.println("unique="+unique);
			Path file2 = rootLocation.resolve(unique + file.getOriginalFilename());
			Resource resource = new UrlResource(file2.toUri());
			System.out.println("resource=" + resource);

			Files.copy(file.getInputStream(), rootLocation.resolve(unique + file.getOriginalFilename()));

			truckRepository.insert(name, open, close, lat, lng, comment, address, file, unique, email);
		} catch (Exception e) {
			System.out.println("중복중복!!");
			throw new RuntimeException("FAIL!");
		}
	}
	
	//리뷰 insert
	public void store(String comment, MultipartFile image, String score, String email, String truck)
			throws IOException {
		long i = System.currentTimeMillis();
		
		try {
			String unique = String.valueOf(i);
			Path file = rootLocation.resolve(unique + image.getOriginalFilename());
			Resource resource = new UrlResource(file.toUri());
			Files.copy(image.getInputStream(), rootLocation.resolve(unique + image.getOriginalFilename()));

			reviewRepository.insert(comment, image, unique, score, email, truck);
		} catch (Exception e) {
			System.out.println("중복중복!!");
			throw new RuntimeException("FAIL!");
		}
	}
	
	//푸드 insert
	public void foodStore(String name, String price, String comment ,MultipartFile file, int truck) throws IOException {
		long i = System.currentTimeMillis();
		
		try {
			String unique = String.valueOf(i);
			System.out.println("filename = " + file.getOriginalFilename());
			Files.copy(file.getInputStream(), rootLocation.resolve(unique + file.getOriginalFilename()));
			foodRepository.insert(name, price, comment, unique, file, truck);

		} catch (Exception e) {
			System.out.println("중복중복!!");
			throw new RuntimeException("FAIL!");
		}
	}
	
	//푸드 update
	public void foodStore(int id, String name, String price, String description, MultipartFile image) throws IOException {
		long i = System.currentTimeMillis();
		try {
			String unique = String.valueOf(i);
			System.out.println("filename = " + image.getOriginalFilename());
			Files.copy(image.getInputStream(), rootLocation.resolve(unique + image.getOriginalFilename()));
			foodRepository.update(id, name, price, description, unique, image);

		} catch (Exception e) {
			System.out.println("중복중복!!");
			throw new RuntimeException("FAIL!");
		}
	}

	// 축제 insert
	public void store(String title, String content, MultipartFile image, String sdate, String edate, int viewcnt)
			throws IOException {
		long i = System.currentTimeMillis();

		try {
			String unique = String.valueOf(i);
			System.out.println("filename = " + image.getOriginalFilename());
			Files.copy(image.getInputStream(), rootLocation.resolve(unique + image.getOriginalFilename()));
			canivalRepository.insert(title, content, image, unique, sdate, edate, viewcnt);

		} catch (Exception e) {
			System.out.println("중복중복!!");
			throw new RuntimeException("FAIL!");
		}
	}

	public Resource loadFile(String filename) {
		try {
			Path file = rootLocation.resolve(filename);
			System.out.println("pathfile = " + file);
			Resource resource = new UrlResource(file.toUri());
			if (resource.exists() || resource.isReadable()) {
				return resource;
			} else {
				throw new RuntimeException("FAIL!");
			}
		} catch (MalformedURLException e) {
			throw new RuntimeException("FAIL!");
		}
	}
}