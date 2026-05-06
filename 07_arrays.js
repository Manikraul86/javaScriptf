/*************  array ***************/

// What is an array?
// An array is a data structure that can hold multiple values at once. It is a collection of items stored at contiguous memory locations. Each item in an array is called an element, and each element can be accessed using its index.

// Creating an array
 const myArr = [1,2,3,4,5];
 console.log(myArr);

//  Accessing array elements
console.log(myArr[0]); // Output: 1
console.log(myArr[2]); // Output: 3 

// Array methods
console.log(myArr.length); // The length property returns the number of elements in an array

myArr.push(6); // The push() method adds a new element to the end of an array
console.log(myArr); // Output: [1, 2, 3, 4, 5, 6]       

myArr.pop(); // The pop() method removes the last element from an array
console.log(myArr);

myArr.unshift(0); // The unshift() method adds a new element to the beginning of an array
console.log(myArr);

myArr.shift(); // The shift() method removes the first element from an array
console.log(myArr);

myArr.splice(2, 1); // The splice() method removes elements from an array
console.log(myArr); // Output: [1, 2, 4, 5]

console.log(myArr.indexOf(4)); // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present

console.log(myArr.slice(1, 3)); // The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)

const newArr = myArr.join(","); // The join() method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string
console.log(newArr); // Output: 1,2,4,5
