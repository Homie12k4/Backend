// This file demonstrates JavaScript data types, showcasing examples of primitive and non-primitive types.

// Primitive data types
let number = 42; // Number
let string = "Hello, World!"; // String
let boolean = true; // Boolean
let undefinedVar; // Undefined
let nullVar = null; // Null
let symbolVar = Symbol('symbol'); // Symbol
let bigIntVar = BigInt(1234567890123456789012345678901234567890); // BigInt

console.log("Primitive Data Types:");
console.log("Number:", number);
console.log("String:", string);
console.log("Boolean:", boolean);
console.log("Undefined:", undefinedVar);
console.log("Null:", nullVar);
console.log("Symbol:", symbolVar);
console.log("BigInt:", bigIntVar);

// Non-primitive data types
let array = [1, 2, 3, 4, 5]; // Array
let object = { name: "John", age: 30 }; // Object
let functionVar = function() { return "I am a function"; }; // Function

console.log("\nNon-Primitive Data Types:");
console.log("Array:", array);
console.log("Object:", object);
console.log("Function:", functionVar());