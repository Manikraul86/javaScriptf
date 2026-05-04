/********* STRINGS IN JS *************/

// // String is a sequence of characters enclosed in single quotes, double quotes, or backticks

let greeting = "Hii, I am Manik Raul";
// console.log(greeting); // Output: Hii, I am Manik Raul

// String concatenation
let firstName = "Manik";
let lastName = "Raul";
let fullName = firstName + " " + lastName; // Concatenating strings using the + operator
console.log(fullName); // Output: Manik Raul


// String methods
 const gameName = new String("valorant");

console.log(gameName.length); //The length property returns the number of characters in a string
console.log(gameName.toUpperCase());//The toUpperCase() method converts a string to uppercase letters
console.log(gameName.toLowerCase());//The toLowerCase() method converts a string to lowercase letters
console.log(gameName.includes("valor")); //The includes() method checks if a string contains a specified value and returns true or false
console.log(gameName.startsWith("val")); //The startsWith() method checks if a string starts with a specified value and returns true or false
console.log(gameName.endsWith("ant")); //The endsWith() method checks if a string ends with a specified value and returns true or false
console.log(gameName.indexOf("o")); //The indexOf() method returns the position of the first occurrence of a specified value in a string
console.log(gameName.slice(0, 5)); //The slice() method extracts a part of a string and returns the extracted part
console.log(gameName.replace("valor", "v")); //The replace() method replaces a specified value with another value in a string
console.log(gameName.charAt(3)); //The charAt() method returns the character at a specified index in a string

console.log(gameName.trim()); // Output: valorant





