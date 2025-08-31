//singleton
//obj.create

//object literals
const sym1 = Symbol("key1")
const User = {
    user:"user1",
    "full name":"user1 users",
    age:18,
    [sym1]:"mykey1",
    email:"user1@gmail.com",
}
// console.log(User.age);
// console.log(User["full name"]);
// console.log(User[sym1]); symbol readd

User.age=24;
console.log(User);
console.log("\n");

// Object.freeze(User); //freeze vals
console.log(User);

User.greeting = function(){
    console.log(User);
}
User.greetingTwo = function(){
    console.log(`hello user, ${this["full name"]}`);
}
// console.log(User.greeting());
// console.log(User.greetingTwo());


