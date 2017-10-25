package com.example.demo.repository;

import static org.junit.Assert.fail;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.example.demo.domain.Hotlist;

@RunWith(SpringRunner.class)
@SpringBootTest
public class HotlistRepositoryTest {
	@Autowired
	private HotlistRepository repo;

	@Test
	public void testInsert() {
		Hotlist hotlist = new Hotlist("bb@bb.com","ee가1234");
		repo.insert(hotlist);
		System.out.println(repo.findAllByMember("bb@bb.com"));
	}

	@Test
	public void testDelete() {
		fail("Not yet implemented");
	}

	@Test
	public void testFindAllByMember() {
		repo.findAllByMember("bb@bb.com");
	}
	
	@Test
	public void testFindAll() {
		repo.findAll();
		System.out.println(repo.findAll());
	}

}
