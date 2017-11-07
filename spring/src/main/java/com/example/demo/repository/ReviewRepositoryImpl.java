package com.example.demo.repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.domain.Review;
import com.example.demo.domain.Truck;

@Repository
public class ReviewRepositoryImpl implements ReviewRepository {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	private RowMapper<Review> rowMapper = new RowMapper<Review>() {
		@Override
		public Review mapRow(ResultSet rs, int arg1) throws SQLException {
			Review r = new Review();
			r.setRId(rs.getInt("r_id"));
			r.setRComment(rs.getString("r_comment"));
			r.setRImage(rs.getString("r_image"));
			r.setRScore(rs.getInt("r_score"));
			r.setRDate(rs.getDate("r_date"));
			r.setRMember(rs.getString("r_member"));
			r.setRTruck(rs.getInt("r_truck"));
			
			return r;
		}
	};
	

	@Override
	public int insert(String comment, MultipartFile image, String unique, String score, String email, int truck) {
		String sql = "insert into review (r_comment, r_image, r_date, r_score, r_member, r_truck) "
				+ "values (?,?, CURDATE(),?,?,?)";
		return jdbcTemplate.update(sql, comment, unique + image.getOriginalFilename(), score, email, truck);
	}
	@Override
	public int insert2(String comment, String score, String email, int truck) {
		String sql = "insert into review (r_comment, r_date, r_score, r_member, r_truck) "
				+ "values (?, CURDATE(),?,?,?)";
		return jdbcTemplate.update(sql, comment, score, email, truck);
	}

	//미완성
	@Override
	public int update(Review review) {
		String sql = "update review set r_comment=?, r_image=? r_score=?, r_date=CURDATE() where r_id=?";
		return 0;
	}

	@Override
	public int delete(int rId) {
		String sql = "delete from review where r_id=?";
		return jdbcTemplate.update(sql, rId);
	}

	@Override
	public List<Review> findAll() {
		String sql = "select * from review order by r_id desc";
		return jdbcTemplate.query(sql, rowMapper);
	}

	@Override
	public List<Review> findMemberReview(String rMember) {
		String sql = "select * from review where r_member=? order by r_id desc";
		return jdbcTemplate.query(sql, rowMapper, rMember);
	}

	@Override
	public List<Review> findTruckReview(int rTruck) {
		String sql = "select * from review where r_truck=? order by r_id desc";
		return jdbcTemplate.query(sql, rowMapper, rTruck);
	}

}
