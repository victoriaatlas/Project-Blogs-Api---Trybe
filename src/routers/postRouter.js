const { Router } = require('express');

const postController = require('../controllers/postController');
const jwtService = require('../Services/jwtService');

const router = Router();

router.post('/', jwtService.validateToken, postController.createPost);

module.exports = router; 