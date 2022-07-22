
module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: {
            type: DataTypes.INTEGER,
        },
        categoryId: {
            type: DataTypes.INTEGER,
        } 
    },
    {
      timestamps: false, 
    });
    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
          as: 'postId',
          through: PostCategory,
          foreignKey: 'id',
          otherKey: 'id',
        });
        models.Category.belongsToMany(models.BlogPost, {
          as: 'categoryId',
          through: PostCategory,
          foreignKey: 'id',
          otherKey: 'id',
        });
      };
  
    return PostCategory;
  };