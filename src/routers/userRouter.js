const { Router } = require('express');

const userController = require('../controllers/userController');

const userRouter = Router();

userRouter.post('/user', userController.createUser);

userRouter.use(userController.validateToken);

userRouter.get('/user', userController.listAll);

module.exports = userRouter;