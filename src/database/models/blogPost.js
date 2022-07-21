const BlogPost = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define("BlogPost", {
      id:  {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
      title: {
          type: DataTypes.STRING,
          allowNull: false
        },
      content: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true
      },
      published: {
        type: DataTypes.DATE,
      },
      updated: {
        type: DataTypes.DATE,
      },
    }, {
        timestamps: false,
        tableName: 'BlogPosts',
    });

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
            foreignKey: 'id', as: 'user'
        })
    }
  
    return BlogPost;
  };
  
  module.exports = BlogPost;