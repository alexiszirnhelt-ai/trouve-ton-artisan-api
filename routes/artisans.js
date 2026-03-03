const express = require('express');
const router = express.Router();
const { getTopArtisans, getAllArtisans, searchArtisans, getArtisanById } = require('../controllers/artisansController');

router.get('/top', getTopArtisans);
router.get('/search', searchArtisans);
router.get('/', getAllArtisans);
router.get('/:id', getArtisanById);

module.exports = router;
