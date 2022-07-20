const { Router } = require('express');

const userController = require('../controllers/userController');
const validateToken = require('../Services/jwtService');

const router = Router();

router.post('/', userController.createUser);
router.get('/', validateToken.validateToken, userController.listAll);
router.get('/:id', validateToken.validateToken, userController.getById);

module.exports = router; 