const router = require('express').Router();
const controllers = require('./controllers.js');

//FILL OUT ROUTES
router.route('/food')
  .get(controllers.get)
  .post(controllers.post)

module.exports = router;