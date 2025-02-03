console.log("Compte");

let compte = {
    client : yoann,
    Numero_compte : 123456,
    solde : 2000,
};

afficher = function () {
    console.log(this.client, this.Numero, this.solde);
};

crediter = function (argent) {
    this.solde += argent; 
}

debiter = function (argent) {
    this.solde -= argent;
}

