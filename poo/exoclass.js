class contact {
    constructor(nom, prenom, date_de_naissance) {
        this.nom = nom;
        this.prenom = prenom;
        this.date_de_naissance = date_de_naissance;
    }

    afficher() {
        console.log(this.nom, this.prenom, this.date_de_naissance);
    }
}

class employe extends contact {
    constructor(nom, prenom, date_de_naissance, salaire, anciennete) {
        super(nom, prenom, date_de_naissance);
        this.salaire = salaire;
        this.anciennete = anciennete;
    }

    afficheSalaire() {
        console.log(this.salaire + "€", this.anciennete + "ans d'anciennté");
    }

    augmentersalaire(){
        if (this.anciennete > 10) {
            this.salaire = this.salaire + (this.salaire * 0.10);
        }
        else {
                this.salaire = this.salaire + (this.salaire * 0.05);
        }
        console.log(this.salaire + "€" + " " + this.anciennete+ "ans d'ancienneté");
        
    
    }
}

let employe1 = new employe("Pichars", "Roger", "1993-06-01", 2000, 8);
employe1.afficher();
employe1.afficheSalaire();
employe1.augmentersalaire();
