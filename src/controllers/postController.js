const postService = require('../Services/postService');
const categoryService = require('../Services/categoryService');
const userService = require('../Services/userService');

const postController = {
    createPost: async (req, res) => {
        const { title, content, categoryIds } = req.body;
        const userId = await userService.emailFinder(req.user);
        // const userData = req.user; // objeto de dados do user jwt //lembrar: por algum motivo n pude desestruturar, só vinha undefined
        if (title === '' || !categoryIds || content === '') {
            return res.status(400).json({
                message: 'Some required fields are missing' });
        }
        const matchId = await categoryService.idHunter(categoryIds); // array com todos os ids encontrados
        if (!matchId.length) return res.status(400).json({ message: '"categoryIds" not found' });

        const newPost = await postService.createPost(title, content, categoryIds, userId);
        console.log(newPost, 'soue eu?');
        res.status(201).json(newPost);
    },
};

/*
{
  displayName: 'calangão',
  email: 'thiagobeauty@email.com',
  image: 'http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png',
  iat: 1658586417
}  
 */

/* eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImNhbGFuZ8OjbyIsImVtYWlsIjoidGhpYWdvYmVhdXR5QGVtYWlsLmNvbSIsImltYWdlIjoiaHR0cDovLzQuYnAuYmxvZ3Nwb3QuY29tL19ZQTUwYWRRLTd2US9TMWdmUl82dWZwSS9BQUFBQUFBQUFBay8xRXJKR2dSV1pEZy9TNDUvYnJldHQucG5nIiwiaWF0IjoxNjU4NTg2NDE3fQ.hRJf4h8lSbCa1RK7J1POQ42oCcVHssFlpnYCY27nmHc */

module.exports = postController;