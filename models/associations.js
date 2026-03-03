const Categorie = require('./Categorie');
const Specialite = require('./Specialite');
const Artisan = require('./Artisan');

// Associations
Categorie.hasMany(Specialite, { foreignKey: 'categorieId' });
Specialite.belongsTo(Categorie, { foreignKey: 'categorieId' });

Specialite.hasMany(Artisan, { foreignKey: 'specialiteId' });
Artisan.belongsTo(Specialite, { foreignKey: 'specialiteId' });

module.exports = { Categorie, Specialite, Artisan };
