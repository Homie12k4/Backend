const { log } = require("node:console");

let score=400;
//console.log(score);
let balance = new Number(400); //strictly num
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(5));

let val = 45.66634;
// console.log(val.toPrecision(1));

let hundred = 100000;
//console.log(hundred.toLocaleString());
// console.log(hundred.toLocaleString('en-US'));
// console.log(hundred.toLocaleString('en-IN'));

// Maths---------

console.log(Math);
console.log(Math.round(4.3));
console.log(Math.round(-4.3));
console.log(Math.abs(-3));
console.log(Math.floor(9.99));
console.log(Math.ceil(9.99));

console.log(Math.random());
const max = 20;
const min = 10;
console.log(Math.floor(Math.random() * (max-min+1)+min));







