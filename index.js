// 1. Imports
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { sequelize, testConnexion } = require('./config/database');
require('./models/associations');
const categoriesRouter = require('./routes/categories');
const artisansRouter = require('./routes/artisans');

// 2. Application Express
const app = express();

// 3. Middlewares globaux
app.use(cors({
  origin: [
    process.env.FRONTEND_URL,
    /\.vercel\.app$/  // accepte toutes les URLs *.vercel.app
  ]
}));
app.use(express.json());

// 4. Routes
app.use('/api/categories', categoriesRouter);
app.use('/api/artisans', artisansRouter);

// 5. Démarrage du serveur
const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await testConnexion();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Serveur démarré sur le port ${PORT}`);
    });
  } catch (error) {
    console.error('Erreur au démarrage du serveur :', error);
    process.exit(1);
  }
};

start();
