module.exports = {
  apps: [
    {
      name: 'jc0',
      exec_mode: 'fork',
      script: './cron.js',
      args: '',
      out_file: './logs/pm2-out.log',
      error_file: './logs/pm2-error.log',
      merge_logs: true,
      log_date_format:"YYYY-MM-DD HH:mm:ss"
    }
  ]
}