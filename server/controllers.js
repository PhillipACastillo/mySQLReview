const dbHelpers = require('../database/dbHelpers.js');

module.exports = {
  get: (req, res) => {
    dbHelpers.getAll((err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  },

  post: (req, res) => {
    dbHelpers.post(req.body, (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  }
}