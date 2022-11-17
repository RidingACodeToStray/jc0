create table `td_test.user`(
  `id` tinyint(4) NOT NULL auto_increment,
  `name` varchar(255) default '',
  `inserTime` timestamp default current_timestamp,
  primary key (id)
) engine=InnoDB default charset=utf8mb4 collate=utf8mb4_unicode_ci;