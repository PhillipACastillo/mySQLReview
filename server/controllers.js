const controllers = require('../database/dbHelpers.js')
module.exports = {
  get: (req, res) => {
    controllers.get((err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    })
  },

  post: (req, res) => {
    controllers.post(req.body, (err, results) => {
      if (err) { res.status(404).send(err); }
      res.status(200).send(results);
    })
  }
}

// Slow in how to use these requests