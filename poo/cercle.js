class Cercle {
    constructor(rayon) {
        this.rayon = rayon;
    }

    
    perimetre() {
        return 2 * Math.PI * this.rayon;
    }

    
    aire() {
        return Math.PI * Math.pow(this.rayon, 2);
    }
};

let cercle1 = new Cercle(5);
console.log(cercle1.perimetre())
console.log(cercle1.aire())
