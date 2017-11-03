package com.example.demo.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

@Repository
public class ImageFileRepositoryImpl implements ImageFileRepository {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Override
	public int reviewInsert(String comment, MultipartFile image, String unique, String score, String email, String truck) {
		String sql = "insert into review (comment, image, score, email, truck) values (?,?,?,?,?)";
//		return jdbcTemplate.update(sql, name, open, close, Double.parseDouble(lat), Double.parseDouble(lng), address,
//				comment, "src/main/webapp/img" + unique + file.getOriginalFilename(), email);
		return jdbcTemplate.update(sql, comment, unique + image.getOriginalFilename(), score, email, truck);
	}

}
