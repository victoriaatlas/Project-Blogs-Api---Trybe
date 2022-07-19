const Joi = require('joi');
const { User } = require('../database/models');
const jwtService = require('./jwtService');

const userService = {
    validateBody: (data) => {
        const schema = Joi.object({
            displayName: Joi.string().required().min(8),
            email: Joi.string().email().required(),
            password: Joi.string().required().min(6),
            image: Joi.string().required(),
        });

        const { error, value } = schema.validate(data);

        if (error) {
            const e = error;
            e.status = 400;
            throw e;
        }

        return value;
    },
    alreadyExists: async (email) => {
        const user = await User.findOne({ where: { email } });
        if (user) return true;

        return false;
    },
    createUser: async ({ displayName, email, password, image }) => {
        const user = await User.create({ displayName, email, password, image });

        const createToken = {
            displayName: user.displayName,
            email: user.email,
            image: user.image,
        };

        const token = jwtService.createToken(createToken);

        return token;
    },
};

module.exports = userService;