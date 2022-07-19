require('dotenv/config');
const jtw = require('jsonwebtoken');

const jwtService = {
    createToken: (user) => {
        if (user === null) return null;

        const token = jtw.sign(user, process.env.JWT_SECRET);
        return token;
    },
    validateToken: (token) => {
        try {
            const data = jtw.verify(token, process.env.JWT_SECRET);
            return data;
        } catch (error) {
            const e = error;
            e.status = 401;
            throw e;
        }
    },
};

module.exports = jwtService;