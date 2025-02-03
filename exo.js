let eleves = ['Yoann', 'Anas', 'Ulyss', 'Nawel', 'Badr', 'Yassine', 'Bryan'];

for (let i = 0; i < eleves.length; i++) {
    console.log(eleves[i]);
}

eleves.forEach(
    function (eleves, i) {
        console.log(i+1, eleves);
    }
);

// eleves.forEach((eleves, i) => console.log(i, eleves));

eleves.unshift(eleves[eleves.length - 1]);
eleves.pop();

eleves.forEach(
    function (eleves, i) {
        console.log(i+1, eleves);
    }
);

eleves.push(eleves[0]);
eleves.shift();

eleves.push(eleves.shift[0]);   

let temp = eleves[0];
eleves[0] = eleves[1];
eleves[1] = temp;

