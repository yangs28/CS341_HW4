var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res) {
    const selectedMonth = req.body.monthText;
    console.log("Selected month: " + selectedMonth);
    res.json({
        title: 'Orders for ' + selectedMonth,
        data: [
        {"topping":"cherry", "quantity":2},
        {"topping":"plain", "quantity":6},
        {"topping":"chocolate", "quantity":3}
    ]
    });
});

module.exports = router;
