-- =============================================
-- Script de création de la base de données
-- Projet : Trouve ton artisan
-- =============================================

CREATE DATABASE IF NOT EXISTS trouve_ton_artisan;
USE trouve_ton_artisan;

DROP TABLE IF EXISTS artisans;
DROP TABLE IF EXISTS specialites;
DROP TABLE IF EXISTS categories;

CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL
);

CREATE TABLE specialites (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  categorieId INT NOT NULL,
  FOREIGN KEY (categorieId) REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE artisans (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  note FLOAT NULL,
  ville VARCHAR(255) NULL,
  apropos TEXT NULL,
  email VARCHAR(255) NULL,
  siteweb VARCHAR(255) NULL,
  top BOOLEAN DEFAULT 0,
  specialiteId INT NOT NULL,
  FOREIGN KEY (specialiteId) REFERENCES specialites(id) ON DELETE CASCADE
);
