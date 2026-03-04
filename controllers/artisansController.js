const { Op } = require('sequelize');
const { Artisan, Specialite, Categorie } = require('../models/associations');

// GET /api/artisans/top — Les 3 artisans du mois
const getTopArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      where: { top: true },
      limit: 3,
      include: [{ model: Specialite }],
    });
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/artisans — Tous les artisans, filtrés par catégorie si ?categorieId=
const getAllArtisans = async (req, res) => {
  try {
    const { categorieId } = req.query;
    const include = [{ model: Specialite }];
    if (categorieId) {
      include[0].where = { categorieId };
    }
    const artisans = await Artisan.findAll({ include });
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/artisans/search?nom= — Recherche par nom
const searchArtisans = async (req, res) => {
  try {
    const { nom } = req.query;
    const artisans = await Artisan.findAll({
      where: { nom: { [Op.like]: `%${nom}%` } },
      include: [{ model: Specialite }],
    });
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/artisans/:id — Un artisan par son id
const getArtisanById = async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id, {
      include: [{ model: Specialite, include: [{ model: Categorie }] }],
    });
    if (!artisan) {
      return res.status(404).json({ message: 'Artisan non trouvé.' });
    }
    res.json(artisan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTopArtisans, getAllArtisans, searchArtisans, getArtisanById };
