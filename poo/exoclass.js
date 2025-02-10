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

    afficher() {
        super.afficher();
        console.log(this.salaire, this.anciennete);
    }

    augmentersalaire(){
        if (this.anciennete > 10) {
            this.salaire = this.salaire + (this.salaire * 0.10);
        else {
                this.salaire = this.salaire + (this.salaire * 0.05);
            }
            console.log(this.salaire + " " + this.anciennete);
        }
    
    }
}

