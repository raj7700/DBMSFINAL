const mysql = require("mysql");
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "rajkumar",
  database: "placementcell",
});

module.exports = db;
