console.log('tableau.js');

console0log('boucle for');

let tableau = [1, 22, 3, 44, 5];

let taille = tableau.length;
console.log(taille);

let a = tableau[0];
let b = tableau[1];
let dernier = tableau[tableau.length - 1];


tableau[0] = 2;

tableau.push(6);

tableau.unshift(25);

console.log(a, b, dernier);

for (let i = 0; i < tableau.length; i++) {
    console.log(tableau[i]);
}

tableau.splice(2, 1);

tableau.pop();

tableau.shift();

console.log('boucle foreach');
tableau.forEach(
    function (element, index) {
        console.log(element);
    }
);
