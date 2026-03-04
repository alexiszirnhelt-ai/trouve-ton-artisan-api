const { Categorie } = require('../models/associations');

const getAllCategories = async (req, res) => {
  try {
    const categories = await Categorie.findAll();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue.' });
  }
};

module.exports = { getAllCategories };
