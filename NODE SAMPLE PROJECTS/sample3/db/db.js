const Pool = require("pg").Pool;


//Set any names for user and password in .env but not set USERNAME , PASSWORD as variables in .env
//So here i used DB_USER and DB_PASS

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DATABASE,
  host: process.env.HOST,
  port: process.env.PORT_NUM 
});

module.exports = pool;
