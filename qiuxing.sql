CREATE TABLE `star` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '名字',
  `avatarUrl` varchar(1000) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '头像',
  `team` varchar(100) DEFAULT '0' COMMENT '队伍',
  `desc` varchar(1000) DEFAULT '0' COMMENT '简介',
  `updateTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;