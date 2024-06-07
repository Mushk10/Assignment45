// variables design
let mango = "mango";
let uppercaseMango = "MANGO";
let ten = 10;
let thirty = 30;
let fruits = ["apple", "mango", "banana"];

//test for eqality and inequality with string
console.log("\nis mango is equal to mango");
console.log(mango == "mango");

console.log("\nis mango is not equal to mango?");
console.log(mango != "mango")
// tests using the lower case function
console.log("\nis MANGO is equal to mango after converting to lowercase? ");
console.log(uppercaseMango.toLowerCase() == "mango");

console.log("\nis MANGO is not equal to mango after converting to lowercase?");
console.log(uppercaseMango.toLowerCase() != "mango");

//Numerical tests
console.log("\n Is ten is equal to thirty");
console.log(ten == thirty);

console.log("\nIs ten is not equal to thirty");
console.log(ten != thirty)

// greater than and smaller than 
console.log("\n Is ten is greater than one");
console.log(ten > 1);

console.log("\n Is thirty is less than 10 ");
console.log(thirty <10);

// greater than equal to
console.log("\n Is ten is greater than or equal to 5?");
console.log(ten >= 5);

//less than equal to
console.log("\n thirty is less thsn or equal to 10");
console.log( thirty <= 10);

//tests using "and" and "or" operators
//&& operator
console.log("\n thirty is not equal to 10 and thirty is greagter than 10");
console.log(thirty != 10 && thirty > 10);

console.log("\n thirty is not equal to 10 and thirty is greater than 40");
console.log(thirty != 10 && thirty > 40 );

// || operator
console.log("\n 30 is greater than 50 OR 30 is equal to 30");
console.log(30 > 50 || 30 == 30 );

console.log("\n 30 is greater than 50 OR 30 is not equal to 30")
console.log(30 > 50 || 30 != 30 )

//test whether an item is in a array
console.log("\n Is mango include in my fruits array");
console.log(fruits.includes("mango"));

console.log("\n Is mango not include in my fruits array");
console.log(!fruits.includes("mango"));

