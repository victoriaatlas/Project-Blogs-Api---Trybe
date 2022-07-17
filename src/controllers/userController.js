const userService = require('../Services/userService');

const userController = {
    login: async (req, res) => {
        const { email, password } = req.body;

        if (email === '' || password === '') {
            res.status(400).json({ message: 'Some required fields are missing' });
        }

       const token = await userService.login(email, password);

       res.status(200).json({ token });
    },
};

module.exports = userController;