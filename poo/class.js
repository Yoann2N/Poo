class livre {
    constructor(titre, auteur, nbPages, disponibilite) {
        this.titre = titre;
        this.auteur =auteur;
        this.nbPages = nbPages;
        this.disponibilite = disponibilite; 
    }
    
    afficher() {
        console.log(this.titre, this.auteur, this.nbPages, this.disponibilite); 
    }
};

let l1 = new livre("le seigneur des anneaux", "J.R.R Tolkien", 1000, true);
let l2 = new livre("oui oui", "Enid Blyton", 20, true);
let l3 = new livre("le petit prince", "Antoine de Saint-Exupéry", 100, true);

livre1.afficher();
livre2.afficher();
livre3.afficher();

livre1.nbPages = 2000;
livre1.disponibilite = false;
livre1.afficher();


const biblioteque = [l1, l2, l3];
for (let i = 0; i < biblioteque.length; i++) {
    biblioteque[i].afficher();
}

//bibioteque.forEach(function(livre) => livre.afficher());
//biblioteque.forEach(livre => livre.afficher());


