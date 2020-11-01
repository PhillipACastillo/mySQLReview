const db = require('./index.js');

const seed = [
  {
    name: 'Apple' ,
    price: 5,
    rating: 8
  },
  {
    name: 'Banana',
    price: 3,
    rating: 6
  },
  {
    name: 'Orange',
    price: 4,
    rating: 10
  }
]

// Slow point
const seeding = () => {
  seed.forEach(element => {
    const { name, price, rating } = element;
    queryStr = `INSERT INTO food (name, price, rating) VALUES ('${name}', ${price}, ${rating})`
    db.query(queryStr, (err, data) => {
      if (err) {
        console.error(err);
      }
      console.log('Success');
    });
  })
  db.end();
}

seeding();

// Mistakes: No ./ before index.js
  // Adding seed as a parameter of the seeding function
  // Running node on the wrong file: initally ran on sever/seed.js but
    // should have used database/seed.js