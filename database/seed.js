const db = require('./index.js');

seed = [
  {
    name: 'Hot Dog',
    price: 7,
    rating: 5
  },
  {
    name: 'Corn Dog',
    price: 8,
    rating: 7
  },
  {
    name: 'Churro',
    price: 3,
    rating: 8
  }
]

const seedFunc = () => {
  seed.forEach(element => {
    const { name, price, rating } = element;
    let queryStr = 'INSERT INTO food (name, price, rating) VALUES (\'' + name + '\', ' + price + ', ' + rating + ');';
    db.query(queryStr, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log('success');
      }
    })
  });
  db.end();
};

seedFunc();