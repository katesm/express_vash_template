var express = require('express');
var router = express.Router();
var validation = require('../validation.js');
var jwt = require('jsonwebtoken');

/* GET  */
router.get('/', function (req, res, next) {
  res.render('login');
});
// POST 
router.post('/', function (req, res, next) {
  //Check validation
  req.checkBody(validation.login);
  req.getValidationResult().then((result) => {
    if (!result.isEmpty()) {
      var results = result.array();
      console.log(results);

      //Send the user errors
      return res.render('login', {
        message: results[0].msg
      });
    } else {
      //User is good. Now, test them against a Database

      //******** DB Code here ************ */

      //If good from DB sign a token and place it as a cookie
      var exp = Math.floor(Date.now() / 1000) + (60 * 60); //Expires in an hour
      var token = jwt.sign({
          exp: exp,
          data: {
            username: req.body.username

          }
        },
        "PICKLES");

      let options = {
        maxAge: exp // would expire with token
        // httpOnly: true, // The cookie only accessible by the web server
        // signed: true // Indicates if the cookie should be signed
      }

      // Set cookie and send the user to the users page
      res.cookie('token', token, options);
      return res.redirect('/users');
    }
  });

  router.get('/signout', function (req, res, next) {
    res.clearCookie("token");
    res.redirect('/');
  });

});


module.exports = router;