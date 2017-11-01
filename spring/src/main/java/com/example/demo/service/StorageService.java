package com.example.demo.service;

import java.io.File;

//package com.javasampleapproach.uploadfiles.storage;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.repository.TruckRepository;
import com.example.demo.repository.TruckRepositoryImpl;

@Service
public class StorageService {

	@Autowired
	TruckRepository truckRepository;

	Logger log = LoggerFactory.getLogger(this.getClass().getName());
	private final Path rootLocation = Paths.get("src/main/resources/static/image");
	// private final Path rootLocation = Paths.get("D:/uploads");

	long i = System.currentTimeMillis();

	public void store(String name, String open, String close, String lat, String lng, String comment, String address,
			MultipartFile file) throws IOException {

		// File folder = new File("src/main/webapp/img");

		System.out.println(rootLocation);

		try {
			String unique = String.valueOf(i);
			System.out.println("filename = " + file.getOriginalFilename());
			// if (!folder.exists()) {
			// if (folder.mkdir()) {
			// System.out.println("Directory is created!");
			// } else {
			// System.out.println("Failed to create directory!");
			// }
			// }

			Path file2 = rootLocation.resolve(unique + file.getOriginalFilename());
			System.out.println("pathfile = " + file2);
			Resource resource = new UrlResource(file2.toUri());
			Files.copy(file.getInputStream(), rootLocation.resolve(unique + file.getOriginalFilename()));
			// Files.copy(file.getInputStream(),
			// folder.toPath().resolve(unique+file.getOriginalFilename()));
			truckRepository.insert(name, open, close, lat, lng, comment, address, file, unique);

			// truckRepository.insert(name, open,close, lat ,lng ,comment
			// ,address, file2);

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

	public void deleteAll() {
		FileSystemUtils.deleteRecursively(rootLocation.toFile());
	}

	public void init() {
		try {
			Files.createDirectory(rootLocation);
		} catch (IOException e) {
			throw new RuntimeException("Could not initialize storage!");
		}
	}
}