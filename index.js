var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "127.0.0.1",
  database: 'skil',
  user:  "root",
  password: ''
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  connection.query("SELECT * FROM STUDENTS", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
//lijst met COACHES
connection.query("SELECT * FROM COACHES ", function (err, result) {
  if (err) throw err;
  console.log(result);
});
//lijst met issues
connection.query("SELECT * FROM issues ", function (err, result) {
  if (err) throw err;
  console.log(result);
});
//lijst met insertet issues
connection.query('INSERT INTO issues SET ?', {naam:"Ties", issue:"ik heb een probleem " ,idStudent:"13"}, function (error, results, fields) {
  if (error) throw error;
  console.log(results.insertId);
});
