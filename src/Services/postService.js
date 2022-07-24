const { BlogPost } = require('../database/models');
const { PostCategory } = require('../database/models');

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
};

module.exports = postService;