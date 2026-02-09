var express = require('express');
var router = express.Router();

/* GET home page. Redirect to the orders JSON file in public/ */
router.get('/', function(req, res, next) {
  // redirect to the static orders.json file served from the public folder
  res.redirect('/orders.json');
});

module.exports = router;
