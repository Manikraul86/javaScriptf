/************ DataTypes *******************/
/*What are data types in JavaScript?
Data types in JavaScript refer to the different types of values that can be stored and manipulated in a program. JavaScript has several built-in data types, including:*/


/*In JavaScript, there are two main categories of data types: primitive and non-primitive. Primitive data types include string, number, boolean, null, undefined, and symbol. Non-primitive data types include objects, arrays, and functions. Each data type has its own characteristics and behaviors, and understanding them is crucial for writing effective JavaScript code.*/

// Primitive Data Types

// String
let name = "John Doe";
console.log(name); // Output: John Doe  

// Number
let age = 30;
console.log(age); // Output: 30

// Boolean
let isStudent = true;   
console.log(isStudent); // Output: true

// Null
let emptyValue = null;
console.log(emptyValue); // Output: null

// Undefined
let undefinedValue; 
console.log(undefinedValue); // Output: undefined

// Symbol
let uniqueId = Symbol("id");
console.log(uniqueId); // Output: Symbol(id)        

// Non Primitive Data Types

// Object
let person = {
    name: "Alice",
    age: 25,
    isStudent: false
};
console.log(person); // Output: { name: 'Alice', age: 25, isStudent: false }

// Array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4,5]

// Function
function greet() {
    return "Hello, World!";
}
console.log(greet()); // Output: Hello, World!

// JavaScript is a dynamically typed language, which means that variables can hold values of any data type and can change types during runtime. Understanding data types is crucial for writing effective JavaScript code and avoiding type-related errors.
// In JavaScript, you can use the typeof operator to check the data type of a variable. For example:
console.log(typeof name); // Output: string
console.log(typeof age); // Output: number
console.log(typeof isStudent); // Output: boolean
console.log(typeof emptyValue); // Output: object (this is a known quirk in JavaScript, as null is considered an object)
console.log(typeof undefinedValue); // Output: undefined
console.log(typeof uniqueId); // Output: symbol
console.log(typeof person); // Output: object
console.log(typeof numbers); // Output: object (arrays are also considered objects in JavaScript)
console.log(typeof greet); // Output: function  

// Understanding data types is essential for performing operations, making decisions, and managing memory effectively in JavaScript programming.

