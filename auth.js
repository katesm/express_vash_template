var jwt = require('jsonwebtoken');
var vash = require('vash');
const SUPER_SECRET = "PICKLES";
//Handle Auth
var auth = function (req, res, next) {
    //check for token
    var token = req.body.token || req.query.token || req.cookies.token || req.headers['x-access-token'];

    console.log(req.cookies);

    //decode
    if (token) {
        jwt.verify(token, SUPER_SECRET, function (err, decoded) {
            if (err) return res.status(403).send({
                success: false,
                message: 'Failed to authenticate'
            });
            console.log(decoded);
            //save to req object
            req.user = decoded.data;
            //Add as a helper to template system
            vash.helpers.user = req.user.username;
           
            next();
        })
    } else {
        return res.status(403).render('403.vash', {
            message: 'Failed to supply auth token'
        });

    }
}

module.exports = auth