const jwt = require('jsonwebtoken');

///// Grab & Decode Token from headers /////

function checkAuth(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1]; // Bearer TOKEN  (token send by the User)
        const decodedToken = jwt.verify(token, process.env.JWT_KEY); // Decode token
        req.userData = decodedToken;
        next();
    } catch(error) {
        return res.status(401).json({
            message: "Invalid or expired token provided!",
            error: error
        });
    }
}

module.exports = {
    checkAuth: checkAuth
}