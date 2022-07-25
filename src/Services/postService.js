const { BlogPost } = require('../database/models');
const { PostCategory } = require('../database/models');
const { User } = require('../database/models');
const { Category } = require('../database/models');
// const categoryService = require('./categoryService');
// const userService = require('./userService');

const postService = {
    createPost: async (title, content, categoryIds, userId) => {
      const post = await BlogPost.create({
        title,
        content,
        categoryIds,
        userId,
     });       

     const { id: postId } = post.toJSON();

     for (let i = 0; i < categoryIds.length; i += 1) { 
        PostCategory.create({ postId, categoryId: categoryIds[i] });
     }

    // Recebi ajuda do Dev Alisson Dahlem(tribo A) pra pecorrer o categoryIds com for tradicional
      return post.toJSON();
    },
    getPost: async () => {
      const allpost = await BlogPost.findAll({
        include: [
          { model: User, as: 'user', attributes: { exclude: ['password'] } },
          { model: Category, as: 'categories' },
        ],
      });
      return allpost;
    },
    getId: async (id) => {
      const post = await BlogPost.findByPk(id, {
        include: [
          { model: User, as: 'user', attributes: { exclude: ['password'] } },
          { model: Category, as: 'categories' },
        ],
      });
      return post;
    },
};

module.exports = postService;