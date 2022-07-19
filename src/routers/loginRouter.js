const { Router } = require('express');

const userController = require('../controllers/userController');

const loginRouter = Router();

loginRouter.post('/login', userController.login);

module.exports = loginRouter;