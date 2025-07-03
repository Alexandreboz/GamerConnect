const mysql = require('mysql2');
require("dotenv").config();
// Configuration de la connexion à la base de données MySQL
// Utilisation des variables d'environnement pour la configuration
// Si les variables d'environnement ne sont pas définies, utiliser des valeurs par défaut
// pour faciliter le développement local

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'gameruser',
  password: process.env.DB_PASSWORD || 'gamerpass',
  database: process.env.DB_NAME || 'GamerConnect',
});

db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à MySQL :', err.message);
    process.exit(1);
  }
  console.log('Connexion à la base MySQL réussie !');
});

module.exports = db;
