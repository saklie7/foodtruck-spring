package com.example.demo.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.repository.ReviewRepositoryImpl;

@Service
public class ReviewService {
	@Autowired
	private ReviewRepositoryImpl reviewRepository;

	Logger log = LoggerFactory.getLogger(this.getClass().getName());
	private final Path rootLocation = Paths.get("src/main/resources/static/image");

	long i = System.currentTimeMillis();

	public void store(String comment, MultipartFile image, String score, String email, String truck)
			throws IOException {
		System.out.println("StorageService # rootLocation = " + rootLocation);

		String unique = String.valueOf(i);
		System.out.println("unique=" + unique);

		Path file = rootLocation.resolve(unique + image.getOriginalFilename());
		Resource resource = new UrlResource(file.toUri());
		System.out.println("resource=" + resource);

		Files.copy(image.getInputStream(), rootLocation.resolve(unique + image.getOriginalFilename()));

		reviewRepository.insert(comment, image, unique, score, email, truck);
	}

}
