const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Artisan = sequelize.define('Artisan', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  note: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  ville: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  apropos: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  siteweb: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  top: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  specialiteId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'artisans',
  timestamps: false,
});

module.exports = Artisan;
