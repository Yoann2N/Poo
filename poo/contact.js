class Contact {

    constructor(Nom, Prenom, Date_de_naissance, Adresse, Code_postal, Ville, Email, Telephone) {
        this.Nom = Nom;
        this.Prenom = Prenom;
        this.Date_de_naissance = Date_de_naissance;
        this.Adresse = Adresse;
        this.Code_postal = Code_postal;
        this.Ville = Ville;
        this.Email = Email;
        this.Telephone = Telephone;
    }

    afficher() {
        console.log(this.Nom, this.Prenom, this.Date_de_naissance, this.Adresse, this.Code_postal, this.Ville, this.Email, this.Telephone);
    }

    mail(email) {
        console.log("Le mail à été envoyé à l'adresse suivante : ", this.email);
    }
    
};

let contact1 = new Contact("Bouvet", "Yoann", "1993-06-01", "rue de la paix", 75000, "Paris", "bouvet.yoann@gmail.com", "0606060606");
let contact2 = new Contact("Dupont", "Jean", "1990-06-01", "rue de la paix", 75000, "Paris", "dupont.jean@gmail.com", "0606060607");
let contact3 = new Contact("Durand", "Pierre", "1995-06-01", "rue de la paix", 75000, "Paris", "durand.pierre@gmail.com", "0606060608");
let contact4 = new Contact("Martin", "Paul", "1992-06-01", "rue de la paix", 75000, "Paris", "martin.paul@gmail.com", "0606060609");
let contact5 = new Contact("Bernard", "Jacques", "1991-06-01", "rue de la paix", 75000, "Paris", "bernard.jacques@gmail.com", "0606060610");
let contact6 = new Contact("Lefevre", "Michel", "1994-06-01", "rue de la paix", 75000, "Paris", "lefevre.michel@gmail.com", "0606060611");
let contact7 = new Contact("Leroy", "Henri", "1996-06-01", "rue de la paix", 75000, "Paris", "leroy.h@gmail.com", "0606060612");
let contact8 = new Contact("Moreau", "Georges", "1997-06-01", "rue de la paix", 75000, "Paris", "Moreau.g@gmail.com", "0606060613");
let contact9 = new Contact("Girard", "Philippe", "1998-06-01", "rue de la paix", 75000, "Paris", "girard.p@gmail.com", "0606060614");
let contact10 = new Contact("Roux", "Louis", "1999-06-01", "rue de la paix", 75000, "Paris", "roux.louis@gmail.com", "0606060615");

const Liste_contact = [contact1, contact2, contact3, contact4, contact5, contact6, contact7, contact8, contact9, contact10];

//for (let i = 0; i < Liste_contact.length; i++) {
   // Liste_contact[i].afficher();
//}
Liste_contact.forEach(function(Liste_contact) {Contact.afficher()});
Liste_contact.forEach(Liste_contact => Liste_contact.afficher());