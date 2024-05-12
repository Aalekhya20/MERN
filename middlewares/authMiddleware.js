//decrypting the token
const JWT = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    try {
        // Check if Authorization header exists
        if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
            return res.status(401).send({
                success: false,
                message: 'Authorization header missing or invalid'
            });
        }

        // Extract token from header
        const token = req.headers.authorization.split(" ")[1];

        // DECRYPTING the token
        JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                return res.status(401).send({
                    success: false,
                    message: 'Authentication failed'
                });
            }
            else {
                req.userId = decode.userId; // Store user ID in request object
                next();
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error in authentication middleware',
            error
        });
    }
};
