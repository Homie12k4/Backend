const { log } = require("node:console");

let today= new Date();
console.log(today);
console.log(today.toDateString());
console.log(today.toLocaleString());
console.log(typeof today);
console.log("\n");
let day2= new Date(2025,0,22);
let day3= new Date(2025,0,22,5,30);
console.log(day2.toString());
console.log(day2.toLocaleString());
console.log(day3.toLocaleString());
//----------------to locale string
const date4= new Date();
date4.toLocaleString('default', {
    weekday:"long"
})
console.log(date4);
