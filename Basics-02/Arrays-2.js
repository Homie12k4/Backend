const { log } = require("node:console");

let marvelHeros = ["Ironman","Spiderman","thor"]
let dcHeros = ["Batman","Superman","Peacemaker"]

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);
let allHeros = marvelHeros.concat(dcHeros); //have to store in a new array and only two arrays at a time can be concatinated
// console.log(allHeros);
let oneHero = ["eagly"]
let sameHeros = [...marvelHeros,...dcHeros,...oneHero]; //spread| adds multiple arrays together
// console.log(sameHeros);

let numArr = [1,2,3,[4,5],[5,[7,8]]];
// console.log(numArr.flat(Infinity));


// console.log(Array.isArray("hello"));
// console.log(Array.from("hello"));
console.log(Array.from({name:"Pink"})); //see this
let val1= 100;
let val2 = 200;
let val3 = 300;
console.log(Array.of(val1,val2,val3));


