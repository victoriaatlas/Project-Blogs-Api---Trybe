const userService = require('../Services/userService');

const userController = {
    login: async (req, res) => {
        let token = {};
    try {
        const { email, password } = userService.validateBody(req.body);
    
        token = await userService.login(email, password);
    } catch (error) {
        return res.status(error.status).json({ message: error.message });
        }

       res.status(200).json({ token });
    },
};

module.exports = userController;