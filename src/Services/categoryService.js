const { Category } = require('../database/models');

const categoryService = {
    create: async (name) => {
        const newCategory = await Category.create({ name });

        return newCategory;
    },
};

module.exports = categoryService;