var CronJob = require('cron').CronJob;
var job = new CronJob(
	'*/10 * * * * *',
	function() {
    
	},
	function() {
    //job.stop()后调用
    console.log('结束');
  },
	true,
	'Asia/Shanghai'
);
job.start()