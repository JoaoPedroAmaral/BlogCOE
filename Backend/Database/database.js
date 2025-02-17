import mysql from 'mysql2'

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Pedro251900.",
    database: "coe"
})

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });