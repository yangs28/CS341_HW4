var express = require('express');
var router = express.Router();

/* GET orders page. */
router.get('/', function(req, res, next) {
    //Displays json data for the orders page. Data currently hard coded
res.json({
    title: 'Orders',
    data: [
    {"topping":"cherry", "quantity":2},
    {"topping":"plain", "quantity":6},
    {"topping":"chocolate", "quantity":3}
]
});
});

//Processes a POST request. If you receive a post it should update to the order info for the selected month
router.post('/', function(req, res) {
    const selectedMonth = req.body.monthText;
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
