package com.example.demo.repository;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.fail;

import java.io.IOException;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.domain.Food;
import com.example.demo.service.StorageService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class FoodRepositoryTest {
	
	@Autowired
	private FoodRepository repo;
	@Autowired
	private StorageService ser;
	
	@Test
	public void testInsert() throws IOException {
//		ser.foodStore("지금입력", "2222", "맛있어요", 3);
//		List<Food> foods = repo.findAllByTruck(3);
//		for (Food f : foods) {
//			System.out.println(f);
//		}
	}

	@Test
	public void testUpdate() {
		fail("Not yet implemented");
	}

	@Test
	public void testDelete() {
		fail("Not yet implemented");
	}

	@Test
	public void testFindAllByTruck() {
		assertNotNull(repo);
		List<Food> foods = repo.findAllByTruck(3);
		for (Food f : foods) {
			System.out.println(f);
		}

	}

}
