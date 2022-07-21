const { Router } = require('express');

const categoryContoller = require('../controllers/categoryController');
const jwtService = require('../Services/jwtService');

const router = Router();

router.post('/', jwtService.validateToken, categoryContoller.create);

module.exports = router; 