// # Exercice 1 
let monNombre = 50;
let monNombre2 = 60;
console.log(`${monNombre} + ${monNombre2} = ${monNombre + monNombre2}`);
console.log(`${monNombre} - ${monNombre2} = ${monNombre - monNombre2}`);
console.log(`${monNombre} / ${monNombre2} = ${monNombre / monNombre2}`);
console.log(`${monNombre} * ${monNombre2} = ${monNombre * monNombre2}`);


console.log("____________________________");

// # Exercice 2 
let age = Number(prompt('ton âge ?'));
let numberConvert = parseInt(age)
console.log(typeof age);
let prenom = prompt('ton prenom ?');

console.log(`${prenom} a ${age} ans cette année`);
console.log(`${prenom} a ${age+3} ans dans 3ans`);


console.log("____________________________");

// # Exercice 3 

let annee = 1997;
let actuelle = 2021;
console.log(`ton age actuelle : ${actuelle - annee} ans`);
console.log(`ton age dans deux ans : ${(actuelle - annee) + 2} ans`);