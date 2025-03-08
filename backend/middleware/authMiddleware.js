const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization) {
        console.log(" Received Authorization Header:", req.headers.authorization); // Debug log

        if (req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1]; // Extract token
            console.log(" Extracted Token:", token); // Debug log

            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
                console.log(" Decoded Token:", decoded); // Debug log

                req.user = await User.findById(decoded.id).select('-password'); // Attach user data
                console.log(" Authenticated User:", req.user); // Debug log

                return next(); // Continue
            } catch (error) {
                console.error(" JWT Verification Failed:", error);
                return res.status(401).json({ message: 'Not authorized, token failed' });
            }
        }
    }

    console.log(" No Token Found in Request");
    return res.status(401).json({ message: 'Not authorized, no token' });
};

module.exports = { protect };
