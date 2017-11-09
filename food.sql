commit;

drop table canival;
drop table support;
drop table hotlist;
drop table review;
drop table food;
drop table truck;
drop table member;

select * from member;
select * from truck;
select * from food;
select * from review;
select * from hotlist;
select * from support;
select * from canival;

select * from truck order by t_id desc;
#----------------------------------------
create table member(
	m_email varchar(50) primary key,
	m_password varchar(50) not null,
	m_image varchar(1000),
	m_nickname varchar(100),
	m_registype int(5)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into member values ('aa@aa.com','aa','aa.jpg','AA',1);
insert into member values ('bb@bb.com','bb','bb.jpg','BB',1);
insert into member values ('cc@cc.com','cc','cc.jpg','CC',2);
insert into member values ('dd@dd.com','dd','dd.jpg','DD',1);
insert into member values ('ee@ee.com','ee','ee.jpg','EE',2);
insert into member values ('ff@ff.com','ff','ff.jpg','FF',1);
insert into member values ('gg@gg.com','gg','gg.jpg','GG',1);
insert into member values ('hh@hh.com','hh','hh.jpg','HH',2);
insert into member values ('ii@ii.com','ii','ii.jpg','II',1);
insert into member values ('jj@jj.com','jj','jj.jpg','JJ',1);

#----------------------------------------
create table truck(
   t_id int primary key auto_increment,
   t_name varchar(100) not null,
   t_image varchar(1000),
   t_avg decimal(10,1),
   t_comment varchar(1000),
   t_open varchar(100),
   t_close varchar(100),
   t_lat double,
   t_lng double,
   t_address varchar(200),
   t_foodmaterial varchar(500),
   t_member varchar(50),
   constraint t_member foreign key(t_member) references member(m_email) on delete cascade on update cascade
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into truck(t_name, t_image, t_avg, t_comment, t_open, t_close, t_lat, t_lng, t_address, t_foodmaterial, t_member) 
   values ('aa의 맛집','d:/', 0,'맛있는 핫도그', 'AM 11:00','PM 11:00 ',37.484868,126.897985, '서울특별시 명동 서울국제금융센터', '원산지는 국산', 'aa@aa.com');
insert into truck(t_name, t_image, t_avg, t_comment, t_open, t_close, t_lat, t_lng, t_address, t_foodmaterial, t_member) 
   values ('bb의 맛집','d:/', 0,'맛있는 핫도그', 'AM 11:00','PM 11:00 ',37.483242,126.899723, '서울특별시 명동 서울국제금융센터','원산지는 국산', 'bb@bb.com');
insert into truck(t_name, t_image, t_avg, t_comment, t_open, t_close, t_lat, t_lng, t_address, t_foodmaterial, t_member) 
   values ('cc의 맛집','d:/', 0,'맛있는 핫도그', 'AM 11:00','PM 11:00 ',37.485000,126.899584, '서울특별시 명동 서울국제금융센터','원산지는 국산', 'cc@cc.com');
insert into truck(t_name, t_image, t_avg, t_comment, t_open, t_close, t_lat, t_lng, t_address, t_foodmaterial, t_member) 
   values ('dd의 맛집','d:/', 0,'맛있는 핫도그', 'AM 11:00','PM 11:00 ',37.512941,126.926756, '서울특별시 명동 서울국제금융센터','원산지는 국산', 'dd@dd.com');
insert into truck(t_name, t_image, t_avg, t_comment, t_open, t_close, t_lat, t_lng, t_address, t_foodmaterial, t_member) 
   values ('ee의 맛집','d:/', 0,'맛있는 핫도그', 'AM 11:00','PM 11:00 ',37.524516,126.919370, '서울특별시 명동 서울국제금융센터','원산지는 국산', 'ee@ee.com');


#-------------------------------------
create table review(
	r_id int primary key auto_increment,
	r_comment varchar(1000),
	r_image varchar(1000),
	r_score decimal(10),
	r_date date not null,
	r_member varchar(50) not null,
	constraint r_member foreign key(r_member) references member(m_email) on delete cascade,
	r_truck int,
	constraint r_truck foreign key(r_truck) references truck(t_id) on delete cascade
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into review (r_comment, r_score, r_image, r_date, r_member, r_truck) values ("맛있는 떡복이 입니다.", 7, "D:/upload", CURDATE(), "cc@cc.com",1);
insert into review (r_comment, r_score, r_image, r_date, r_member, r_truck) values ("맛이 쏘쏘한 떡복이 입니다.", 5, "D:/upload", CURDATE(), "cc@cc.com",2);
insert into review (r_comment, r_score, r_image, r_date, r_member, r_truck) values ("맛없는 떡복이 입니다.", 3, "D:/upload", CURDATE(), "cc@cc.com",3);
insert into review (r_comment, r_score, r_image, r_date, r_member, r_truck) values ("맛없는 떡복이 입니다.", 4, "D:/upload", CURDATE(), "cc@cc.com",1);
insert into review (r_comment, r_score, r_image, r_date, r_member, r_truck) values ("맛없는 떡복이 입니다.", 6, "D:/upload", CURDATE(), "cc@cc.com",2);
insert into review (r_comment, r_score, r_image, r_date, r_member, r_truck) values ("맛없는 떡복이 입니다.", 3, "D:/upload", CURDATE(), "cc@cc.com",4);

#-------------------------------------

create table food(
	f_id int primary key auto_increment,
	f_name varchar(50) not null,
	f_price varchar(50) not null,
	f_image varchar(1000) not null,
	f_description varchar(500) not null,
	f_truck int,
	constraint f_truck foreign key(f_truck) references truck(t_id) on delete cascade
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into food (f_name, f_price, f_image, f_description, f_truck) values ("엽기떡볶이1", "10000", "떡볶이이미지", "매운단계가 3단계임", 1);
insert into food (f_name, f_price, f_image, f_description, f_truck) values ("엽기떡볶이2", "10000", "떡볶이이미지", "매운단계가 3단계임", 1);
insert into food (f_name, f_price, f_image, f_description, f_truck) values ("엽기떡볶이1", "10000", "떡볶이이미지", "매운단계가 3단계임", 2);
insert into food (f_name, f_price, f_image, f_description, f_truck) values ("엽기떡볶이2", "10000", "떡볶이이미지", "매운단계가 3단계임", 2);


#-----------------------------------------------
create table canival(
	c_id int primary key auto_increment,
	c_title varchar(100) not null,
	c_content varchar(1000) not null,
	c_image varchar(1000),
	c_sdate varchar(100),
	c_edate varchar(100),
	c_viewcnt int
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into canival(c_title,c_content,c_image,c_sdate,c_edate,c_viewcnt) values ( '서울시 불꽃축제1', '서울시 불꽃축제에서 다양한 볼거리와 맛있는 음식을 누리세요1', '1.jpg', '2017-10-20','2017-10-31',0);
insert into canival(c_title,c_content,c_image,c_sdate,c_edate,c_viewcnt) values ( '서울시 불꽃축제2', '서울시 불꽃축제에서 다양한 볼거리와 맛있는 음식을 누리세요2', '2.jpg', '2017-10-20','2017-10-31',0);
insert into canival(c_title,c_content,c_image,c_sdate,c_edate,c_viewcnt) values ( '서울시 불꽃축제3', '서울시 불꽃축제에서 다양한 볼거리와 맛있는 음식을 누리세요3', '3.jpg', '2017-10-20','2017-10-31',0);
insert into canival(c_title,c_content,c_image,c_sdate,c_edate,c_viewcnt) values ( '서울시 불꽃축제4', '서울시 불꽃축제에서 다양한 볼거리와 맛있는 음식을 누리세요4', '4.jpg', '2017-10-20','2017-10-31',0);
insert into canival(c_title,c_content,c_image,c_sdate,c_edate,c_viewcnt) values ( '서울시 불꽃축제5', '서울시 불꽃축제에서 다양한 볼거리와 맛있는 음식을 누리세요5', '5.jpg', '2017-10-20','2017-10-31',0);
insert into canival(c_title,c_content,c_image,c_sdate,c_edate,c_viewcnt) values ( '서울시 불꽃축제6', '서울시 불꽃축제에서 다양한 볼거리와 맛있는 음식을 누리세요6', '6.jpg', '2017-10-20','2017-10-31',0);


#-----------------------------------------------
create table hotlist(
	h_id int auto_increment primary key,
	h_member varchar(50) not null,
	constraint h_member foreign key(h_member) references member(m_email) on delete cascade on update cascade,
	h_truck int not null,
	constraint h_truck foreign key(h_truck) references truck(t_id) on delete cascade on update cascade
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


insert into hotlist (h_member, h_truck) values ("aa@aa.com", 1);
insert into hotlist (h_member, h_truck) values ("aa@aa.com", 2);
insert into hotlist (h_member, h_truck) values ("aa@aa.com", 3);
insert into hotlist (h_member, h_truck) values ("bb@bb.com", 1);
insert into hotlist (h_member, h_truck) values ("bb@bb.com", 2);


#-----------------------------------------------

create table support(
	s_id int primary key auto_increment,
	s_title varchar(100) not null,
	s_content varchar(1000),
	s_date date not null,
	s_registype int(5),
	s_member varchar(50) not null,
	constraint s_member foreign key(s_member) references member(m_email) on delete cascade on update cascade
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into support(s_title, s_content, s_date, s_registype, s_member) values('이용관련문의1', '1-사업자이용관련문의드립니다.', CURDATE(), '1', 'aa@aa.com');

insert into support(s_title,s_content,s_date,s_registype,s_member) values ('이용관련문의1', '1-사업자이용관련문의드립니다.', '2017-10-23', '0', 'aa@aa.com');
insert into support(s_title,s_content,s_date,s_registype,s_member) values ('이용관련문의2', '2-사업자이용관련문의드립니다.', '2017-10-23', '0', 'bb@bb.com');
insert into support(s_title,s_content,s_date,s_registype,s_member) values ('이용관련문의3', '3-사업자이용관련문의드립니다.', '2017-10-23', '0', 'cc@cc.com');
insert into support(s_title,s_content,s_date,s_registype,s_member) values ('이용관련문의4', '4-사업자이용관련문의드립니다.', '2017-10-23', '0', 'dd@dd.com');
insert into support(s_title,s_content,s_date,s_registype,s_member) values ('이용관련문의5', '5-사업자이용관련문의드립니다.', '2017-10-23', '0', 'ee@ee.com');
insert into support(s_title,s_content,s_date,s_registype,s_member) values ('이용관련문의6', '6-사업자이용관련문의드립니다.', '2017-10-23', '0', 'ff@ff.com');

#-----------------------------------------------
update truck set t_avg = (select round(avg(r_score), 1) from review where r_truck=1) where t_id=5;