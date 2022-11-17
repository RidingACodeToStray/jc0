const schedule = require('node-schedule');
const rule = new schedule.RecurrenceRule();
const job = (val) => {
  // schedule.scheduleJob('* * * * * *', function(){
  //   console.log('每秒执行一次');
  // });

  // schedule.scheduleJob('0 * * * * *', function(){
  //   console.log('每分钟的第1秒执行一次');
  // });

  // schedule.scheduleJob('*/3 * * * * *', function(){
  //   console.log('每3秒执行一次');
  // });

  // schedule.scheduleJob('*/2 * * * *', function(){
  //   console.log('每2分钟执行一次');
  // });

  // schedule.scheduleJob('0 41 * * * *', function(fireDate){
  //   console.log('每小时第41分钟的第0秒执行');
  // });

  // schedule.scheduleJob(new Date(2022, 10, 16, 19, 48, 0), function(){
  //   console.log('2022年11月16日19点48分0秒执行');
  // });
  
  // rule.second = 3
  // schedule.scheduleJob(rule, function(){
  //   console.log('每分钟的第3秒执行');
  // });

  schedule.scheduleJob(val, function(){
    console.log('传值执行');
  });

}

module.exports = job;