const { log } = require("node:console");

//array
let arr1 = [1,2,3,4,"hello",true];
// console.log(arr1[2]);
let arr2 = new Array(2,3,'world',true);

//array methods
arr1.push(3);
//console.log(arr1);
arr1.pop()
// console.log(arr1);
// console.log(arr2);

// arr1.unshift(true);
// arr1.shift();
// arr1.shift();
// arr1.unshift(55);
// console.log(arr1);

// console.log(arr2.includes(9));
// console.log(arr2.indexOf(9));

let arr4 = arr1.join(); //joins and converts to string type
// console.log(arr1);
// console.log(arr4);

console.log(arr1);
const slicearr= arr1.slice(0,3)
console.log(slicearr);
const splicearr = arr1.splice(0,3);
console.log(splicearr);
console.log(arr1);

