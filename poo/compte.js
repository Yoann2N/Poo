console.log("Compte");

let compte = {
    client : "yoann",
    Numero_compte : "123456",
    solde : 2000,


    afficher : function () {
        console.log(this.client, this.Numero_compte, this.solde);
    },

    crediter : function (montant) {
        this.solde += montant; 
        console.log(this.solde); 
    },

    debiter : function (montant) {
        this.solde -= montant;
        console.log(this.solde);
    },
};

compte.afficher();
compte.crediter(500);
compte.debiter(200);