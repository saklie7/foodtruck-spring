package com.example.demo.repository;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.example.demo.domain.Hotlist;
import com.example.demo.service.HotlistService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class HotlistRepositoryTest {
	@Autowired
	private HotlistRepository repo;
	@Autowired
	private HotlistService checkService;

	@Test
	public void testInsert() {
		Hotlist hotlist = new Hotlist("bb@bb.com", 1);
		Hotlist h = checkService.checkDuplicate(hotlist);

		if (h == null) {
			System.out.println("Cannot add the duplicated favorite truck.");
		} else {
			int affected = repo.insert(h);
			System.out.println("Successful ");
			System.out.println("affected= " + affected);
		}
		System.out.println(repo.findAllByMember("bb@bb.com"));
	}

	@Test
	public void testDelete() {
		repo.delete(1);
	}

	@Test
	public void testFindAllByMember() {
		System.out.println(repo.findAllByMember("aa@aa.com"));
		repo.findAllByMember("aa@aa.com");
	}

	@Test
	public void testFindAll() {
		repo.findAll();
		System.out.println(repo.findAll());
	}

}
