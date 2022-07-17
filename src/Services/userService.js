const db = require('../database/models/user');
const jwtService = require('./jwtService');

const userService = {
    login: async (email, password) => {
        const user = await db.createUser.findOne({
            where: { email, password },
        });

        if (password !== user.password) {
            const e = new Error('Invalid fields');
            e.name = 'ValidationError';
            throw e;
        }

        const token = jwtService.createToken(email);

        return token;
    },
};

module.exports = userService;