class Animal {


  constructor(nom) {
    this.nom = nom;
  }

  NbPattes(n) {
    this.nbPattes = n;
  }

  couleur(c) {
    this.couleur = c;
  }

  parler() {
    console.log(this.nom + ' fait du bruit.');
  }

  afficher() {
    console.log('nom:', this.nom);
    console.log('Nombre de pattes:', this.nbPattes);
    }
}


class chien extends Animal {
    nbPattes = 4;
    parler() {
        console.log(this.nom + ' fait woof woof.');  
   
  
    }
}
class chat extends Animal {
  
    nbPattes = 4;
    parler() {
        console.log(this.nom + ' fait miaou.');  
   
  
    }
  
    
}

class oiseau extends Animal {
    nbPattes = 2;
    parler() {
        console.log(this.nom + ' fait cui cui.');  


    }   
}
  
  let medor = new Animal('Medor');
    
    medor.afficher();
    medor.parler();
  
  let Rex = new chien('Rex');
    
    Rex.afficher();
    Rex.parler();

  let Felix = new chat('Felix');
    
    Felix.afficher();
    Felix.parler();
  
  let Titi = new oiseau('Titi');
    
    Titi.afficher();
    Titi.parler();