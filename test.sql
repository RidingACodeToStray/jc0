CREATE TABLE `match` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `dateTime` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '开始时间',
  `type` tinyint(4) DEFAULT '0' COMMENT '0 待设置，1 小组赛，2 1/4决赛，3 半决赛，4 三四名决赛，5 季军赛，6 冠亚军争夺赛',
  `group` varchar(1000) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '组名',
  `teamA` varchar(100) DEFAULT '' COMMENT 'A队',
  `teamB` varchar(100) DEFAULT '' COMMENT 'B队',
  `teamAPoints` tinyint(4) DEFAULT '0' COMMENT 'A队比分',
  `teamBPoints` tinyint(4) DEFAULT '0' COMMENT 'B队比分',
  `site` varchar(100) DEFAULT '' COMMENT '比赛场地',
  `updateTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;