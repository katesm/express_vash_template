var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

  //Call DB and get some users.
  res.render("users", { users: [{username:'ben'},{username:'jerry'}] });


})

module.exports = router;