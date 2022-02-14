const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "12345",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: "tododb"
});

module.exports = pool;