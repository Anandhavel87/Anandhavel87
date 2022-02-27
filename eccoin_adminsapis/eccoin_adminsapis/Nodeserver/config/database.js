const { createPool } = require("mysql");
const pool = createPool({
    database: process.env.MYSQL_DB,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: "",
    port: process.env.DB_PORT,
    connectionLimit: 10
});
module.exports = pool;