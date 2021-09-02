const jwt = require('jsonwebtoken');

///// Grab & Decode Token from headers /////

function checkAuth(req, res, next) {

        const token = req.headers.authorization.split(" ")[1];         // Bearer TOKEN 
        jwt.verify(token, process.env.JWT_KEY, (error, decoded) => {   // Decode token
            req.userData = decoded; 
            if (error) {
                return res.status(401).json('token invalid');
            }
        });

        if ( req.params.userId && req.params.userId != req.userData.userId ) {
            return res.status(401).json({
                message: "Invalid or expired token provided!"    
            }); 
        }
        next();
}

module.exports = {
    checkAuth: checkAuth
}