package com.example.demo.repository;

import org.springframework.web.multipart.MultipartFile;

public interface ImageFileRepository {
	public int reviewInsert(String comment, MultipartFile image, String unique, String score, String email, String truck);
}
