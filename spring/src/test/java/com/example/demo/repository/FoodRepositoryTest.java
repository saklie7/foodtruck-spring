package com.example.demo.repository;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.fail;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.example.demo.domain.Food;

@RunWith(SpringRunner.class)
@SpringBootTest
public class FoodRepositoryTest {
	
	@Autowired
	private FoodRepository repo;
	
	@Test
	public void testInsert() {
		fail("Not yet implemented");
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
		List<Food> foods = repo.findAllByTruck("ee가1234");
		for (Food f : foods) {
			System.out.println(f);
		}

	}

}
