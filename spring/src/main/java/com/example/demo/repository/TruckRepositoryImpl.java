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

//	@Autowired
//	private TruckRepository truckRepository;

	@Autowired
	private JdbcTemplate jdbcTemplate;


	private RowMapper<Truck> rowMapper = new RowMapper<Truck>() {
		@Override
		public Truck mapRow(ResultSet rs, int arg1) throws SQLException {
			Truck t = new Truck();
			// Path file2 = rootLocation.resolve(rs.getString("t_image"));
			// Resource resource;
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
//			t.setTresource("localhost:8080/image/" + rs.getString("t_image"));
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
//		return truckRepository.update(truck);
		return jdbcTemplate.update(sql, truck.getTName(), truck.getTImage(), truck.getTComment(), truck.getTOpen(), 
					truck.getTClose(), truck.getTLat(), truck.getTLng(), truck.getTAddress(), truck.getTFoodmaterial(), truck.getTId());
	}

	@Override
	public int delete(int tId) {
		String sql = "delete from truck where t_id=?";
//		return truckRepository.delete(tId);
		return jdbcTemplate.update(sql, tId);
	}

	@Override
	public List<Truck> findAll() {
		String sql = "select * from truck";
		return jdbcTemplate.query(sql, rowMapper);
	}

	@Override
	public List<Truck> find(int lat, int lng) {
		System.out.println("1 " + lat);
		System.out.println("2 " + lng);
		// String sql = "select * from truck where
		// "+String.valueOf(lat-1)+"<t_lat<"+String.valueOf(lat+1)+""
		// + " and "+ String.valueOf(lng-1)+"<t_lng<"+String.valueOf(lng+1);

		String sql = "select * from (select * from truck where t_lat between " + String.valueOf(lat - 1) + " and "
				+ String.valueOf(lat + 1) + ")a join (select * from truck where t_lng between "
				+ String.valueOf(lng - 1) + " and " + String.valueOf(lng + 1) + ")b on a.t_id = b.t_id";
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
//		return truckRepository.findOneById(tId);
		return jdbcTemplate.queryForObject(sql, rowMapper, tId);
	}

	// 특별히 필요가 한지....
	// @Override
	// public List<Truck> findAllByAddr(String tAddress) {
	// return truckRepository.findAllByAddr(tAddress);
	// }

	@Override
	public Truck findOneByMember(String tMember) {
		String sql = "select * from truck where t_member=?";
//		return truckRepository.findOneByMember(tMember);
		return jdbcTemplate.queryForObject(sql, rowMapper, tMember);
	}

//	@Override
//	public int findAvgByTruck(int tId) {
//		String sql = "";
//		return truckRepository.findAvgByTruck(tId);
//	}

	@Override
	public int updateAvg(int tId) {
		String sql = "update truck set t_avg = (select round(avg(r_score), 1) from review where r_truck=?) where t_id=?";
//		return truckRepository.updateAvg(tId);
		return jdbcTemplate.update(sql, tId, tId);
	}

}
