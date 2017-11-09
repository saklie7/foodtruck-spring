package com.example.demo.repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.domain.Canival;

@Repository
public class CanivalRepositoryImpl implements CanivalRepository {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	private RowMapper<Canival> rowMapper = new RowMapper<Canival>() {
		@Override
		public Canival mapRow(ResultSet rs, int arg1) throws SQLException {
			Canival c = new Canival();

			c.setCId(rs.getInt("c_id"));
			c.setCTitle(rs.getString("c_title"));
			c.setCContent(rs.getString("c_content"));
			c.setCImage(rs.getString("c_image"));
			c.setCSdate(rs.getString("c_sdate"));
			c.setCEdate(rs.getString("c_edate"));
			c.setCViewcnt(rs.getInt("c_viewcnt"));

			return c;
		}
	};

	@Override
	public int insert(String title, String content, MultipartFile image, String unique, String sdate, String edate) {
		String sql = "insert into canival(c_title, c_content, c_image, c_sdate, c_edate, c_viewcnt) values (?,?,?,?,?,0)";
		System.out.println(sql);
		return jdbcTemplate.update(sql, title, content, unique + image.getOriginalFilename(), sdate, edate);
	}

	@Override
	public int update(Canival canival) {
		String sql = "update canival set c_title =?, c_content =?, c_image =?, c_sdate =?, c_edate =? where c_id =?";
		return jdbcTemplate.update(sql, canival.getCTitle(), canival.getCContent(), canival.getCImage(),
				canival.getCSdate(), canival.getCEdate(), canival.getCId());
	}

	@Override
	public int delete(Canival canival) {
		String sql = "delete from canival where c_id = ?";
		return 0;
	}

	@Override
	public List<Canival> selectAll() {
		String sql = "select * from canival order by c_edate desc";
		return jdbcTemplate.query(sql, rowMapper);
	}

	@Override
	public Canival selectById(int cId) {
		String sql = "select * from canival where c_id = ?";
		return jdbcTemplate.queryForObject(sql, rowMapper, cId);
	}

	@Override
	public Canival selectByMaxId() {
		String sql = "select * from canival where c_id=(select max(c_id) from canival)";
		return jdbcTemplate.queryForObject(sql, rowMapper);
	}

	@Override
	public int increment(int cId) {
		String sql = "update canival set c_viewcnt = c_viewcnt + 1 where c_id = ?";
		return jdbcTemplate.update(sql, cId);
	}

}
