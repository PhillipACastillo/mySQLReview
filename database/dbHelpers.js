const db = require('./index.js');

module.exports = {
  getAll: (callback) => {
    let queryStr = 'SELECT * FROM food;';
    db.query(queryStr, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback (null, data);
      }
    })
  },

  post: (body, callback) => {
    const {name, price, rating} = body;
    let queryStr = `INSERT INTO food (name, price, rating) VALUES ('${name}', ${price}, ${rating});`;
    db.query(queryStr, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    })
  }
}