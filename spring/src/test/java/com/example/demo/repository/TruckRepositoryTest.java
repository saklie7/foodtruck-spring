package com.example.demo.repository;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.example.demo.domain.Truck;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TruckRepositoryTest {
	@Autowired
	private TruckRepositoryImpl repo;
	
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
	public void testFindAll() {
		fail("Not yet implemented");
	}

	@Test
	public void testFindOneById() {
		fail("Not yet implemented");
	}

	@Test
	public void testFindAllByAddr() {
		fail("Not yet implemented");
	}

	@Test
	public void testFindOneByMember() {
		Truck t = repo.findOneByMember("aa@aa.com");
		System.out.println(t);
	}

	@Test
	public void testFindAvgByTruck() {
		fail("Not yet implemented");
	}

	@Test
	public void testUpdateAvg() {
		fail("Not yet implemented");
	}

	@Test
	public void testUpdateLocal() {
		fail("Not yet implemented");
	}

}
