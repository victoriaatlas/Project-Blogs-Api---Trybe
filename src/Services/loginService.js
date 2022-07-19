const Joi = require('joi');
const { User } = require('../database/models');
const jwtService = require('./jwtService');

const loginService = {
    validateBody: (data) => {
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
          });
      
          const { error, value } = schema.validate(data);

        if (error) {
            const e = new Error('Some required fields are missing');
           e.status = 400;
           throw e;
        }

        return value;
    },
    login: async (email, password) => {
        const user = await User.findOne({ where: { email, password } });
        if (!user) {
           const error = new Error('Invalid fields');
           error.status = 400;
           throw error;
        }

        const token = jwtService.createToken(user.email);
        
        return token;
    },
    
};

module.exports = loginService;