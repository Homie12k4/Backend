// This file explores non-primitive data types in JavaScript, such as objects and arrays, with examples.

// Example of an object
const person = {
    name: "John Doe",
    age: 30,
    hobbies: ["reading", "traveling", "coding"]
};

// Example of an array
const fruits = ["apple", "banana", "cherry"];

// Function to display object properties
function displayPerson(person) {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Hobbies: ${person.hobbies.join(", ")}`);
}

// Function to display array elements
function displayFruits(fruits) {
    console.log("Fruits:");
    fruits.forEach(fruit => {
        console.log(`- ${fruit}`);
    });
}

// Calling the functions
displayPerson(person);
displayFruits(fruits);