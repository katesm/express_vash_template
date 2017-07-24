var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('contact', {
        message: "This page was rendered on the server"
    })
});

module.exports = router;