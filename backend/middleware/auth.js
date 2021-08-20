const jwt = require('jsonwebtoken');

///// Grab & Decode Token from headers /////

function checkAuth(req, res, next) {

        const token = req.headers.authorization.split(" ")[1]; // Bearer TOKEN  (token send by the User)
        const decodedToken = jwt.verify(token, process.env.JWT_KEY); // Decode token
        req.userData = decodedToken;

        if( req.userData.userId && req.userData.userId != decodedToken.userId ) {
            return res.status(401).json({
                message: "Invalid or expired token provided!",
                error: error
            });
        } else if( req.params.userId && req.params.userId != decodedToken.userId ) {
            return res.status(401).json({
                message: "Invalid or expired token provided!",
                error: error
            });
        } else {
            next();
        }
}

module.exports = {
    checkAuth: checkAuth
}