consol.log("POO");

// objet litteral 
let eleves = {
    prenom: 'Yoann',
    nom: 'Bouvet',
    age: 28,
    moyenne: 15,
    adresse: {
        rue: 'rue de la paix',
        numero: 12,
        codePostal: 75000,
        ville: 'Paris'
    },
    afficher: function () {
        console.log(this.prenom, this.nom, this.age, this.moyenne);
    }
};

eleves.afficher();