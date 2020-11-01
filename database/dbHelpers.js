const db = require('./index.js');

module.exports = {
  get: (callback) => {
    const queryStr = "SELECT * FROM food";
    db.query(queryStr, (err, results) => {
      if (err) { callback(err) }
      callback(null, results);
    })
  },

  post: (body, callback) => {
    const {name, price, rating} = body;
    queryStr = `INSERT INTO food (name, price, rating) VALUES ('${name}', ${price}, ${rating})`
    db.query(queryStr, (err, results) => {
      if (err) { callback (err) }
      callback(null, results);
    })
  }
}