// On crée un objet mysql à partir de la librairie node.js mysql
const mysql = require('mysql');

const Connexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',  
    database: 'dbtest'
});

Connexion.connect((err) => {
    if (err) throw err;
    console.log('Connecté à la base de données MySQL');
});

// A partir d'ici on est connecté à la base de données MySQL

Connexion.query('SELECT * FROM user',
    function(err, rows) {
    if (err, rows) 
        if (err) throw err;
        console.log('Data reçu depuis dbtest:');
        console.log(rows);
    }

);