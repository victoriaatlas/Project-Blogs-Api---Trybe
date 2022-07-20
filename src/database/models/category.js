const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    id:  {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false
      },
  });

  return Category;
};

module.exports = Category;