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
    listAll: async () => {
        const users = await User.findAll({ attributes: { exclude: ['password'] } });

        return users;
    },
    getById: async (id) => {
        const users = await userService.listAll();
        const findId = users.find((u) => u.id === id);

        /* const findUser = await User.findByPk(id, {
            attributes: { exclude: ['password'] },
          }); */

          if (!findId) {
            const e = new Error('User does not exist');
            e.status = 404;
            throw e;
          } 

        return findId;
    },
};

module.exports = userService;