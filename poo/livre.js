let livre1 = {
    titre: "Le seigneur des anneaux",
    auteur: "J.R.R Tolkien",
    nbPages: 1000, 
    disponnibilité: true,

    afficher: function () {
        console.log(this.titre, this.auteur, this.nbPages); 
    },

    estLong: function () {
        return this.nbPages >= 300 ? "Le livre dépasse les 300 pages" : "Le livre ne dépasse pas les 300 pages";
    },
     

    emprunter: function () {
        if (this.disponnibilité) {
            this.disponnibilité = false; 
            return "Le livre a été emprunté";
        } else {
            return "Le livre n'est pas disponible pour l'emprunt";
        }
    },

    rendre: function () {
        if (!this.disponnibilité) { 
            this.disponnibilité = true; 
            return "Le livre a été rendu";
        } else {
            return "Le livre était déjà disponible";
        }
    } 
};

let livre2 = {
    titre: "Le seigneur des anneaux",
    auteur: "J.R.R Tolkien",
    nbPages: 1000, 
    disponnibilité: true,

    afficher: function () {
        console.log(this.titre, this.auteur, this.nbPages); 
    },

    estLong: function () {
        return this.nbPages >= 300 ? "Le livre dépasse les 300 pages" : "Le livre ne dépasse pas les 300 pages";
    },
     

    emprunter: function () {
        if (this.disponnibilité) {
            this.disponnibilité = false; 
            return "Le livre a été emprunté";
        } else {
            return "Le livre n'est pas disponible pour l'emprunt";
        }
    },

    rendre: function () {
        if (!this.disponnibilité) { 
            this.disponnibilité = true; 
            return "Le livre a été rendu";
        } else {
            return "Le livre était déjà disponible";
        }
    } 
};



livre1.afficher();
console.log(livre1.estLong());
console.log(livre1.emprunter());
console.log(livre1.rendre());

console.log(livre2.emprunter());