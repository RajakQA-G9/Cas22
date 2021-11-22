"use strict"

let message = "Hello";
console.log("Data types: String: ", message);

// Data type: Number
message = 123;
console.log("Data types: Number: ", message);

let integer = 123;
let float = 123.45;

console.log("Data types: Infinity: ", 1 / 0); // Infinity
console.log("Data types: NaN: ","not a number" / 2 + 5); // NaN

let bigInt = 100007199254740991n;
console.log("Data types: Bigint: ",bigInt);

// Data type: String

let name = "NodeJS";
let Name = 'NodeJS';

console.log("Data types: String - backtiks `");
console.log(`Hello ${name}`); // Hello NodeJS
console.log(`Rezultat je ${2 + 3}`); // Rezultat je 5
console.log("Rezultat je ${2 + 3}"); // Rezultat je ${2 + 3}

// Data type: Boolean

let thisIsTrue = true;
let thisIsFalse = false;

let isGreater = 4 > 1;

console.log("Data types: Boolean: ", isGreater);

// Data type: null

let age = null;
console.log("Data types: null: ", age);

// Data type: undefined

let undefinedVariable;

console.log("Data types: undefined: ", undefinedVariable);

console.log("Data types - typeof:");
console.log(typeof undefined); // undefined
console.log(typeof 0); // number
console.log(typeof(100n)); // bigint
console.log(typeof(true)); // boolean
console.log(typeof "String"); // string
console.log(typeof Math); // object
console.log(typeof(null)); // object

// Type conversion

console.log("=== String conversion ===");
let value = true;
console.log(typeof value); // boolean

value = String(value);
console.log(typeof value); // string
console.log("=== Number conversion ===");
console.log("6" / "2"); // 3

let string = "123";
console.log(typeof string); // string
let num = Number(string);
console.log(typeof num); // number

console.log(Number("1234 invalid numeric value")); // NaN
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(" 12345 ")); // 12345
console.log(Number("  ")); // 0

console.log("=== Boolean conversion ===");
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("String")); // true
console.log(Boolean("")); // false
console.log(Boolean("0")); // true
console.log(Boolean(" ")); // true

console.log("=== Basic operators ===");
let rezultat = 1 + 2;
console.log(rezultat);

console.log("Modulo operator - %:")
console.log("5 % 2: ", 5 % 2); // 1
console.log("8 % 3: ", 8 % 3); // 2
console.log("4 % 2: ", 4 % 2); // 0
console.log("3 % 2: ", 3 % 2); // 1

console.log("Exponentiation operator - ** :")
console.log(2 ** 2); // 4
console.log(2 ** 3); // 8
console.log(2 ** 4); // 16

console.log("String concatenatin - + :")
let s = "neki" + "string";
console.log(s); // nekistring

console.log("1" + 2); // 12
console.log(2 + "1"); // 21
console.log(2 + 2 + '1'); // 41
console.log("1" + 2 + 2); // 122

console.log(6 - "2"); // 4
console.log("6" / "2"); // 3
console.log("4" * "4"); // 16

// Unary +
console.log("Unary + :");
let unx = 1;
console.log(+unx); // 1

let uny = -5;
console.log(+uny); // -5

console.log(+true); // 1
console.log(+""); // 0

let apples = "2";
let oranges = "3";

console.log(apples + oranges); // 23
console.log(+apples + +oranges); // 5

console.log(+"z"); // NaN

console.log(5 * 2 - 1 * 4);

let xyz = 2 * 2 + 1;

let a1, b1, c1;
a1 = b1 = c1 = 2 + 2;

console.log("a1 =", a1);
console.log("b1 =", b1);
console.log("c1 =", c1);

let n = 2;
console.log("n =", n);
n += 5; // n = n + 5;
console.log("n =", n);
n *= 1; // n = n * 1;
console.log("n =", n);
n -= 1; // n = n - 1;
console.log("n =", n);
n /= 1; // n = n / 1
console.log("n =", n);

let counter = 1;
console.log("counter =", counter);
console.log("counter++ =", counter++); // ispisi vrednost counter, pa je onda uvecaj za 1 
console.log("counter-- =", counter--); // ispisi vrednost counter, pa je onda umanji za 1
console.log("counter =", counter);

console.log("===========");

counter = 1;
console.log("counter =", counter);
console.log("++counter =", ++counter); // uvecaj vrednost counter za 1, pa je prikazi
console.log("--counter =", --counter); // umanji vrednost counter za 1, pa je prikazi
console.log("counter =", counter);

let a = 1, b = 1;
let aa = ++a; // = 2
let bb = b++; // let bb = b; b = b + 1

console.log("aa, bb =", aa, bb);
console.log("a, b =", a, b);

let p1 = 1;
let p2 = p1 + 1;
p1 = 6;

console.log(p1, p2);