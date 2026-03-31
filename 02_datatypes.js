
/*********Data Types in javaScript *********
 * what is data type?
 * Data type is a classification of data that tells the compiler or interpreter how the programmer intends to use the data. It defines the type of value that a variable can hold and the operations that can be performed on that value. In JavaScript, there are several data types that can be categorized into two main groups: primitive data types and non-primitive (or reference) data types. Here is a list of the different data types in JavaScript:
 * In JavaScript, there are several data types that can be categorized into two main groups: primitive data types and non-primitive (or reference) data types. Here is a list of the different data types in JavaScript:

 * 1.String
 * 2.Number & Date
 * 3.Boolean
 * 4.Null
 * 5.Undefined
 * 6.Symbol
 * 7.BigInt
 * 8.Object
 * 9.Array
 * 10.Function
 * 11.Date
 * 12.Map
 * 13.Set
 * 14.WeakMap
 * 15.WeakSet
 * 
*/
//String is a Sequence of characters enclosed in single quotes or double quotes or backticks.
let userName = "Manik Raul";
console.log(userName);
console.log(typeof userName);

//Number is a data type that represents numeric values, including integers and floating point numebrs.
let userAge = 23;
console.log(userAge);
console.log(typeof userAge);

//Bollean is a data type that represents one of two values: true or flase.
let isMarried = false;
console.log(isMarried);
console.log(typeof isMarried);

//Null is a data type that represents the absence of any value or objects. It is often used to indicate that a variable has no value or that an object property is intentionally empty.
let userCity = null;
console.log(userCity);
console.log(typeof userCity);

//Undefined is a data type that represents the absence of a value or the state of being uninitialized. It is the default value of variables that have been declared but not assigned a value.
let userState;
console.log(userState);
console.log(typeof userState);

//Symbol is a data type that represents a unique identifier. It is often used to create private properties in objects.
let userId = Symbol("03");
console.log(userId);
console.log(typeof userId);

//BigInt is a data type that can represent integers larger than the range of the Number type.       
let userPhoneNumber = BigInt("8116699586");
console.log(userPhoneNumber);
console.log(typeof userPhoneNumber);

//Object is a data type that represents a collection of key-value pairs. It is used to store and organize data in a structured way.
let user = {
    name : "Manik Raul",
    age : 23,
    city : "Paschim Medinipur"

}
console.log(user);
console.log(typeof user);

//Array is a data type that represents an ordered collection of values. It is used to store multiple values in a single variable.
let userFriends = ["Uttam", "Raja", "Suman"];
console.log(userFriends);
console.log(typeof userFriends);

//Function is a data type that represents a block of code that can be executed when called. It is used to perform specific tasks or calculations.
function greet(){
    console.log("Hello, I am a coder and I Love Coding");
}
greet();
console.log(typeof greet);

//Date is a data type that represents a specific point in time. It is used to work with dates and times in JavaScript.
let currentDate = new Date();
console.log(currentDate);
console.log(typeof currentDate);

//Map  is a data type that represents a collection of key-value pairs, where each key is unique. It is used to store and retrieve data based on keys.
let userMap = new Map();
userMap.set("name", "Manik Raul");
userMap.set("age",23);
console.log(userMap);
console.log(typeof userMap);

//Set is a data type that represents a collection of unique values. It is used to store and manipulate sets of data without duplicates.
let userSet = new Set();
userSet.add("Manik Raul");
userSet.add(23);
console.log(userSet);
console.log(typeof userSet);

//WeakMap  is a data type that represents a collection of key-value pairs, where the keys are objects and the values can be any data type. It is used to store and retrieve data based on object keys, and it allows for garbage collection of keys that are no longer referenced.
let userWeakMap = new WeakMap();
let userKey = {};
userWeakMap.set(userKey, "Manik Raul");
console.log(userWeakMap);
console.log(typeof userWeakMap);

//WeakSet is a data type that represents a collection of unique objects. It is used to store and manipulate sets of objects without duplicates, and it allows for garbage collection of objects that are no longer referenced.
let userWeakSet = new WeakSet();
let userValue = {};
userWeakSet.add(userValue);
console.log(userWeakSet);
console.log(typeof userWeakSet);


