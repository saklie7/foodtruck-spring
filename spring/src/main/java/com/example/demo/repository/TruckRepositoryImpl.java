package com.example.demo.repository;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.domain.Truck;

@Repository
public class TruckRepositoryImpl implements TruckRepository {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	private RowMapper<Truck> rowMapper = new RowMapper<Truck>() {
		@Override
		public Truck mapRow(ResultSet rs, int arg1) throws SQLException {
			Truck t = new Truck();
			t.setTId(rs.getInt("t_id"));
			t.setTName(rs.getString("t_name"));
			t.setTImage("localhost:8080/image/" + rs.getString("t_image"));
			t.setTAvg(rs.getDouble("t_avg"));
			t.setTComment(rs.getString("t_comment"));
			t.setTOpen(rs.getString("t_open"));
			t.setTClose(rs.getString("t_close"));
			t.setTLat(rs.getDouble("t_lat"));
			t.setTLng(rs.getDouble("t_lng"));
			t.setTAddress(rs.getString("t_address"));
			t.setTFoodmaterial(rs.getString("t_foodmaterial"));
			t.setTMember(rs.getString("t_member"));
			return t;
		}
	};

	@Override
	public int insert(String name, String open, String close, String lat, String lng, String comment, String address,
			MultipartFile file, String unique, String email) {
		String sql = "insert into truck (t_name, t_open, t_close, t_lat, t_lng, t_address,t_comment, t_image, t_member) values(?,?,?,?,?,?,?,?,?)";
		return jdbcTemplate.update(sql, name, open, close, Double.parseDouble(lat), Double.parseDouble(lng), address,
				comment, unique + file.getOriginalFilename(), email);
	}

	@Override
	public int update(Truck truck) {
		String sql = "update truck "+ 
		"set t_name=?, t_image=?, t_comment=?, t_open=?, "+ 
		"t_close=?, t_lat=?, t_lng=?, t_address, t_foodmaterial=? "+
		"where t_id=?";
		return jdbcTemplate.update(sql, truck.getTName(), truck.getTImage(), truck.getTComment(), truck.getTOpen(), 
					truck.getTClose(), truck.getTLat(), truck.getTLng(), truck.getTAddress(), truck.getTFoodmaterial(), truck.getTId());
	}
	
	@Override
	public int updateAvg(int tId) {
		String sql = "update truck set t_avg = (select round(avg(r_score), 1) from review where r_truck=?) where t_id=?";
		return jdbcTemplate.update(sql, tId, tId);
	}

	@Override
	public int delete(int tId) {
		String sql = "delete from truck where t_id=?";
		return jdbcTemplate.update(sql, tId);
	}

	@Override
	public List<Truck> findAll() {
		String sql = "select * from truck";
		return jdbcTemplate.query(sql, rowMapper);
	}

	@Override
	public List<Truck> keyfind(String key) {
		String sql = "select * from truck where t_address like concat('%','" + key + "','%')";
		return jdbcTemplate.query(sql, rowMapper);
	}

	@Override
	public Truck findOneById(int tId) {
		String sql = "select * from truck where t_id=?";
		return jdbcTemplate.queryForObject(sql, rowMapper, tId);
	}

	@Override
	public List<Truck> findOneByMember(String tMember) {
		String sql = "select * from truck where t_member=?";
		return jdbcTemplate.query(sql, rowMapper, tMember);
	}

}
