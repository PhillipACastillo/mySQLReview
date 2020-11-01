const mysql = require('mysql');
// https://www.npmjs.com/package/mysql

// TODO: establish connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'foodDB'
});


db.connect();

db.query('SELECT 1 + 1 AS solution', function (err, results, fields) {
  if (err) { throw err; }
  console.log('The solution is: ', results[0].solution)
})

module.exports = db;