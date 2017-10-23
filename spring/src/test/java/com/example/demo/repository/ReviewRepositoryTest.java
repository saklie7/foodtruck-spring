package com.example.demo.repository;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.fail;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.example.demo.domain.Review;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ReviewRepositoryTest {
	@Autowired
	private ReviewRepository repo;
	@Autowired
	private TruckRepository repo2;
	
	@Test
	public void testInsert() {
		Review review = new Review("귿귿", 5, "bb@bb.com", "ee가1234");
		int num = repo.insert(review);
		System.out.println("repo2.findOneById()="+repo2.findOneById("ee가1234"));;
		repo2.updateAvg("ee가1234");
		System.out.println("repo2.findOneById()====="+repo2.findOneById("ee가1234"));;
		System.out.println("num="+num);
	}

	@Test
	public void testUpdate() {
//		Review review = new Review(4, "귿ddssssd귿", 9);
//		int num = repo.update(review);
//		System.out.println("num="+num);
	}

	@Test
	public void testDelete() {
		fail("Not yet implemented");
	}

	@Test
	public void testFindAll() {
		assertNotNull(repo);
		List<Review> reviews = repo.findAll();
		System.out.println(reviews.size());
		for (Review review : reviews) {
			System.out.println(review);
		}
	}

	@Test
	public void testFindMyReview() {
		fail("Not yet implemented");
	}

	@Test
	public void testFindTruckReview() {
		fail("Not yet implemented");
	}

}
