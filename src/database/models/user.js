const sequelize = require("sequelize");

const User = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id:  {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      displayName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },

    },
    {
      tableName: 'Users',
      timestamps: false
    });

    User.associate = (models) => {
      User.hasMany(models.BlogPost, {
          foreignKey: 'id', as: 'blogPost'
      })
  }
    
    return User;
  };
  
  module.exports = User;