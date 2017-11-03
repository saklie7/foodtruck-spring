package com.example.demo.repository;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TruckRepositoryImplTest {
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
	public void testFind() {
		fail("Not yet implemented");
	}

	@Test
	public void testKeyfind() {
		fail("Not yet implemented");
	}

	@Test
	public void testFindOneById() {
		repo.findOneById(1);
	}

	@Test
	public void testFindOneByMember() {
		fail("Not yet implemented");
	}

	@Test
	public void testUpdateAvg() {
		repo.updateAvg(3);
	}

}
