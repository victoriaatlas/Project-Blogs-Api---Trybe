require('dotenv/config');
const jwt = require('jsonwebtoken');

const jwtService = {
    createToken: (user) => {
        if (user === null) return null;

        const token = jwt.sign(user, process.env.JWT_SECRET);
        return token;
    },
    validateToken: (req, res, next) => {
        const token = req.headers.authorization;

        if (!token) {
           return res.status(401).json({ message: 'Token not found' });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            res.user = decoded.data;
        } catch (error) {
            return res.status(401).json({ message: 'Expired or invalid token' });
        }
       
        next();
    },
};

module.exports = jwtService;