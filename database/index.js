const mysql = require('mysql');
// https://www.npmjs.com/package/mysql

// TODO: establish connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'foodDB'
})

db.connect();

// TODO: Get this to work
// db.query('SELECT 1 + 1 AS solution', (err, result) => {
//   console.log(result);
// })
db.query('SELECT 1 + 1 AS solution', (err, results, fields) => {
  if (err) { throw err; }
  console.log('Database connection works, 1 + 1 is:', results[0].solution);
})


module.exports = db;