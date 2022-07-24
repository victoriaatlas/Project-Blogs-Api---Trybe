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
    idHunter: async (ids) => {
        const categoriesIds = await Promise.all(ids.map((id) => {
            const hunter = Category.findByPk(id);
            return hunter;
        }));
        const categories = categoriesIds.filter((c) => c !== null);
        const values = categories.map(({ dataValues }) => dataValues.id);
        return values;
    },
};

// const categories = filterCategories.map(({ dataValues }) => dataValues.id);
module.exports = categoryService;