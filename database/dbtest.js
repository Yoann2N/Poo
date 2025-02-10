// On crée un objet mysql à partir de la librairie node.js mysql
const mysql = require('mysql');

const Connexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',  
    database: 'testdb'
});

Connexion.connect((err) => {
    if (err) throw err;
    console.log('Connecté à la base de données MySQL');
});

// A partir d'ici on est connecté à la base de données MySQL