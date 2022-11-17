var CronJob = require('cron').CronJob;
const mysql2 = require('./mysql2');
var job = new CronJob(
	'*/10 * * * * *',
	function() {
    var name = 'A' + Date.parse(new Date())/1000;
    var sql = `insert into user (name) values ('${name}')`;
    mysql2.query(sql);
    console.log('插入name:',name)
	},
	function() {
    //job.stop()后调用
    console.log('结束');
  },
	true,
	'Asia/Shanghai'
);
job.start()