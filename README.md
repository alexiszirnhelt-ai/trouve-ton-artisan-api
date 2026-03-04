# Trouve ton artisan — Back-end

API REST développée avec Node.js, Express et Sequelize permettant de gérer et consulter des artisans classés par catégories et spécialités.

---

## Prérequis

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/) (via XAMPP ou autre)
- npm

---

## Installation

### 1. Cloner le repo

```bash
git clone https://github.com/alexiszirnhelt-ai/trouve-ton-artisan-api.git
cd trouve-ton-artisan-api
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer le .env

Crée un fichier `.env` à la racine :

```
PORT=3000

DB_HOST=localhost
DB_PORT=3306
DB_NAME=trouve_ton_artisan
DB_USER=root
DB_PASSWORD=

FRONTEND_URL=http://localhost:5173
```

### 4. Créer la base de données

Lance le script `database/create.sql` dans phpMyAdmin ou via MySQL :

```bash
mysql -u root trouve_ton_artisan < database/create.sql
```

### 5. Lancer le seed

Lance le script `database/seed.sql` pour insérer les données :

```bash
mysql -u root trouve_ton_artisan < database/seed.sql
```

### 6. Démarrer le serveur

```bash
# Production
npm start

# Développement (avec rechargement automatique)
npm run dev
```

Le serveur démarre sur `http://localhost:3000`.

---

## Routes disponibles

### Catégories

| Méthode | Route | Description |
|---------|-------|-------------|
| GET | `/api/categories` | Récupère toutes les catégories |

### Artisans

| Méthode | Route | Description |
|---------|-------|-------------|
| GET | `/api/artisans` | Récupère tous les artisans |
| GET | `/api/artisans?categorieId=1` | Filtre les artisans par catégorie |
| GET | `/api/artisans/top` | Récupère les 3 artisans du mois |
| GET | `/api/artisans/search?nom=bou` | Recherche un artisan par nom |
| GET | `/api/artisans/:id` | Récupère un artisan par son id |
