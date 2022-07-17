require('dotenv/config');
const jtw = require('jsonwebtoken');

const jwtService = {
    createToken: (user) => {
        const token = jtw.sign(user, process.env.JWT_SECRET);
        return token;
    },
};

module.exports = jwtService;