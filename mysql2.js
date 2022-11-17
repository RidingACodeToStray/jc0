const db = require('./db')
const mysql2 = require('mysql2')
class Mysql2 {
  constructor(){
    this.pool = mysql2.createPool(db);
  }
  async query(sql){
    return new Promise((resole, reject) => {
      this.pool.getConnection((err, conn) => {
        if (err) {
          console.log(`数据库连接失败:${err}`)
          reject(err);
        } else {
          conn.query(sql, (err, result, fields) => {
            this.pool.releaseConnection(conn);
            if(err){
              console.log(`数据库操作失败:${err}`)
              reject(err);
            } else {
              resole(result);
            }
          });
        }
      });
    });
  }
}
module.exports = new Mysql2;