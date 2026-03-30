/*Conversion & Operation
In JavaScript, you can perform type conversion (also known as type coercion) to convert values from one data type to another. There are several ways to achieve this, including using built-in functions and operators. Here are some common methods for type conversion in JavaScript:*/

//1. String to Number   
let str = "123";
let num = Number(str);
console.log(num);               
console.log(typeof num);

//2. Number to String   
let num2 = 456;
let str2 = String(num2);
console.log(str2);             
console.log(typeof str2);

//3. Boolean to String
let bool = true;
let str3 = String(bool);
console.log(str3);             
console.log(typeof str3);

//4. String to Boolean
let str4 = "false";
let bool2 = Boolean(str4);
console.log(bool2);            
console.log(typeof bool2);

//5. Number to Boolean
let num3 = 0;
let bool3 = Boolean(num3);
console.log(bool3);            
console.log(typeof bool3);

//6. Boolean to Number
let bool4 = false;
let num4 = Number(bool4);
console.log(num4);            
console.log(typeof num4);   

//7. String to Date
let str5 = "2024-06-01";
let date = new Date(str5);
console.log(date);             
console.log(typeof date);   

//8. Date to String
let date2 = new Date();
let str6 = date2.toString();
console.log(str6);             
console.log(typeof str6);

//9. Object to String
let obj = { name: "Manik", age: 23 };
let str7 = JSON.stringify(obj);
console.log(str7);             
console.log(typeof str7);   

//10. String to Object
let str8 = '{"name":"Manik","age":23}';
let obj2 = JSON.parse(str8);
console.log(obj2);            
console.log(typeof obj2);   

/*In addition to these methods, JavaScript also performs implicit type coercion in certain situations, such as when using the + operator with different data types. For example:*/
let result = "The answer is: " + 42;
console.log(result);          
console.log(typeof result); 

/*In this case, the number 42 is implicitly converted to a string and concatenated with the other string. Understanding type conversion is important for writing effective JavaScript code and avoiding unexpected behavior.*/

/*Data Types in JavaScript
JavaScript has several built-in data types that can be used to store and manipulate different kinds of data. Here are the main data types in JavaScript:*/              

/******* Operations ***************/
//1. Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus  
//2. Comparison Operators
console.log(a == b); // Equal to
console.log(a === b); // Strict equal to
console.log(a != b); // Not equal to
console.log(a !== b); // Strict not equal to
console.log(a > b); // Greater than
console.log(a < b); // Less than
console.log(a >= b); // Greater than or equal to
console.log(a <= b); // Less than or equal to
//3. Logical Operators
let x = true;
let y = false;
console.log(x && y); // Logical AND
console.log(x || y); // Logical OR
console.log(!x); // Logical NOT
//4. Assignment Operators
let c = 10; 
c += 5; // c = c + 5
console.log(c);
c -= 3; // c = c - 3
console.log(c);
c *= 2; // c = c * 2
console.log(c);
c /= 4; // c = c / 4
console.log(c);
c %= 3; // c = c % 3
console.log(c); 
//5. Increment and Decrement Operators
let d = 5;
console.log(d++); // Post-increment
console.log(d); 
let e = 5;
console.log(++e); // Pre-increment
console.log(e); 
let f = 5;
console.log(f--); // Post-decrement
console.log(f); 
let g = 5;
console.log(--g); // Pre-decrement
console.log(g); 
/*These are some of the basic operations you can perform with different data types in JavaScript. Understanding these operations is essential for writing effective and efficient code.*/
