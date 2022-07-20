// const jwtService = require('../Services/jwtService');
const loginService = require('../Services/loginService');
const userService = require('../Services/userService');

const userController = {
    login: async (req, res) => {
        let token = {};

    try {
        const { email, password } = loginService.validateBody(req.body);
    
        token = await loginService.login(email, password);
    } catch (error) {
        return res.status(error.status).json({ message: error.message });
        }

       res.status(200).json({ token });
    },
    createUser: async (req, res) => {
        let newUser = {};
        try { 
         newUser = await userService.validateBody(req.body);
       } catch (err) {
         return res.status(err.status).json({ message: err.message });
       }

        const { email } = req.body;

        const verifyUser = await userService.alreadyExists(email);
        if (verifyUser === true) {
            return res.status(409).json({ message: 'User already registered' });
        }

        const token = await userService.createUser(newUser);
        
        res.status(201).json({ token });
    },
    listAll: async (_req, res) => {
        const users = await userService.listAll();
        console.log(users);
        res.status(200).json(users);
    },
    getById: async (req, res) => {
        try {
            const { id } = req.body;
            const user = await userService.getById(id);
            console.log(user, 'onde eu to?');
            res.status(200).json(user);
        } catch (error) {
            res.status(error.status).json({ message: error.message });
        }
    },
};

module.exports = userController;