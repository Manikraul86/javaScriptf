/************ DataTypes *******************/
/*What are data types in JavaScript?
Data types in JavaScript refer to the different types of values that can be stored and manipulated in a program. JavaScript has several built-in data types, including:*/


/*In JavaScript, there are two main categories of data types: primitive and non-primitive. Primitive data types include string, number, boolean, null, undefined, and symbol. Non-primitive data types include objects, arrays, and functions. Each data type has its own characteristics and behaviors, and understanding them is crucial for writing effective JavaScript code.*/

// Primitive Data Types

// String
let name = "Manik Raul";
console.log(name); // Output: John Doe  

// Number
let age = 24;
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
let person1 = {
    name: "manik raul",
    age: 25,
    isStudent: false
};
console.log(person1); // Output: { name: 'Alice', age: 25, isStudent: false }

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

// ----------------------------------------------------

/********** Types of Memory ***********/

// In JavaScript, there are two main types of memory: (stack memory and heap memory). 
// Stack memory is used for storing primitive data types and function calls, 
// while heap memory is used for storing objects and arrays. Understanding the differences between these two types of memory is important for optimizing performance and managing resources in JavaScript applications.
// Stack memory is a region of memory that is used for storing primitive data types (such as numbers, strings, booleans, null, and undefined) and function calls. It operates in a last-in-first-out (LIFO) manner, meaning that the most recently added item is the first one to be removed. When a function is called, a new stack frame is created to store the function's local variables and parameters. Once the function execution is complete, the stack frame is removed from the stack memory.
// Heap memory, on the other hand, is a region of memory that is used for storing objects and arrays. It is a more flexible memory area that allows for dynamic allocation and deallocation of memory. When an object or array is created, it is stored in heap memory, and a reference to that memory location is stored in stack memory. This allows for the creation of complex data structures and the ability to manipulate them without worrying about memory management.
// Understanding the differences between stack memory and heap memory is crucial for optimizing performance and managing resources in JavaScript applications. Properly managing memory can help prevent memory leaks and improve the overall efficiency of your code.
// Example of stack memory:
function add(a, b) {
    return a + b;
}   
console.log(add(5, 10)); // Output: 15

// Example of heap memory:  
let person = {
    name: "manik raul",
    age: 25
};

let anotherPerson = person; // anotherPerson is a reference to the same object in heap memory
anotherPerson.age = 30; // Modifying the age property through anotherPerson reference

console.log(person.age); // Output: 30 (the change is reflected in the original person object)
console.log(anotherPerson.age); // Output: 30 (the change is reflected in the anotherPerson object)
