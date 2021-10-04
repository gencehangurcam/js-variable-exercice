// INTRO
// let a = 1;
// let b = 2;
// let c = 3;
// let temp;

// console.log(a);
// temp = a; 
// a = b // 2
// console.log(a);
// b = c 
// console.log(b);
// c = c - a;
// console.log(c);


// EXERCICE1
// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

// let tempb;
// let tempa;

// tempb = b
// tempa = a

// a = d;
// b = c;
// c = tempb;
// d = tempa;
// console.log(a,b,c,d);

// EXERCICE2
// let tempa = a; 

// a = b;
// b = c;
// c = d;
// d = tempa;
// console.log(a,b,c,d);

// // EXERCICE3
// let tableau = [1, 2, 3, 4];
// let tempTab = tableau[3]   //4
// let tempTab2 = tableau[2]  //3

// tableau[3] = tableau[0]  //4 -> 1
// tableau[2] = tableau[1]  //3 -> 2
// tableau[1] = tempTab2    //2 -> 3
// tableau[0] = tempTab     //1 -> 4
// console.log(tableau);

// Exercice 4

// OPTION1 avec 3 variables temporaires(dans l'ordre de l'exo)
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
let f = 6;
let tempa = a
let tempb = b
let tempc = c

// a = d;      // 4
// b = e;      // 5
// c = tempa;  // 1
// d = tempb;  // 2
// e = f;      // 6
// f = tempc;  // 3
// console.log(a,b,c,d,e,f);

// OPTION2 avec 1 seule variable temporaire en réorganisant l'ordre

a = d;       //4
d = b;       //2
b = e;       //5 
e = f;       //6
f = c;       //3
c = tempa;   //1
console.log(a,b,c,d,e,f);
