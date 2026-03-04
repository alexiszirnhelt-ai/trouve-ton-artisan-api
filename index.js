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
app.use(cors());
app.use(express.json());

// 4. Routes
app.use('/api/categories', categoriesRouter);
app.use('/api/artisans', artisansRouter);

// 5. Démarrage du serveur
const PORT = process.env.PORT || 3000;

const start = async () => {
  await testConnexion();
  await sequelize.sync();
  app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
  });
};

start();
