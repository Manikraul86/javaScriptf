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
console.log(myArr); // Output: [1, 2, 3, 4, 5]

myArr.unshift(0); // The unshift() method adds a new element to the beginning of an array
console.log(myArr); // Output: [0, 1, 2, 3, 4, 5]

myArr.shift(); // The shift() method removes the first element from an array
console.log(myArr); // Output: [1, 2, 3, 4, 5]

myArr.splice(2, 1); // The splice() method removes elements from an array
console.log(myArr); // Output: [1, 2, 4, 5]

console.log(myArr.indexOf(4)); // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present

console.log(myArr.slice(1, 3)); // The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)

const newArr = myArr.join(","); // The join() method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string
console.log(newArr); // Output: 1,2,4,5

// Iterating over an array
myArr.forEach(function(element) { // The forEach() method executes a provided function once for each array element
    console.log(element); // Output: 1 2 4 5
});

// Multidimensional arrays
const multiArr = [[1, 2], [3, 4], [5, 6]];
console.log(multiArr[0][1]); // Output: 2
console.log(multiArr[1][0]); // Output: 3

// Array destructuring
const [a, b, c] = myArr;
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 4    

// Array spread operator
const newArr2 = [...myArr, 6, 7, 8]; // The spread operator allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected
console.log(newArr2); // Output: [1, 2, 4, 5, 6, 7, 8]  

// Array map method
const squaredArr = myArr.map(function(element) { // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array
    return element * element;
});
console.log(squaredArr); // Output: [1, 4, 16, 25]

// Array filter method  
const evenArr = myArr.filter(function(element) { // The filter() method creates a new array with all elements that pass the test implemented by the provided function
    return element % 2 === 0;
});
console.log(evenArr); // Output: [2, 4] 

// Array reduce method
const sum = myArr.reduce(function(accumulator, currentValue) { // The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value
    return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 12

// Array find method
const foundElement = myArr.find(function(element) { // The find() method returns the value of the first element in the provided array that satisfies the provided testing function
    return element > 3;
});
console.log(foundElement); // Output: 4

// Array includes method
const hasFour = myArr.includes(4); // The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate
console.log(hasFour); // Output: true

// Array sort method
myArr.sort(function(a, b) { // The sort() method sorts the elements of an array in place and returns the sorted array
    return a - b; // Sorts the array in ascending order
});
console.log(myArr); // Output: [1, 2, 4, 5]

// Array reverse method
myArr.reverse();

console.log(myArr); // Output: [5, 4, 2, 1]

// Array concat method
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = arr1.concat(arr2); // The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6] 

// Array flat method
const nestedArr = [1, [2, 3], [4, [5, 6]]];
const flatArr = nestedArr.flat(2);  
console.log(flatArr); // Output: [1, 2, 3, 4, 5, 6]
