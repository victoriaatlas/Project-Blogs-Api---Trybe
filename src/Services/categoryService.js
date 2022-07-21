const { Category } = require('../database/models');

const categoryService = {
    create: async (name) => {
        const newCategory = await Category.create({ name });

        return newCategory;
    },
    listAll: async () => {
        const all = await Category.findAll();

        return all;
    },
};

module.exports = categoryService;