const { log } = require("console");

let name = "trieal";
const count= 5;

// console.log(name + count + " hello" );
console.log(`${name} ${count} hello` );

const newGame = new String("chickoo-Opera");

console.log(newGame[0]);
console.log(newGame.toUpperCase());
console.log(newGame.charAt(4));
console.log(newGame.indexOf("O"));
console.log(newGame.substring(0,4)); //only positive val
console.log(newGame.slice(-12,4)); //posi and neg vals
console.log(newGame.length);

const newStringOne=  "  hello        ";
console.log(newStringOne.trim);

let url = "https://linkedin.hero.com/";
console.log(url.replace('*', '-'));
console.log(url.includes('hero'));

let newLink ="pom-pom-pom.com"
console.log(newLink.split('-'));

console.table(newLink);