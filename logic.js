"use strict";

console.log("Logical OR (||)");
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

let hour = 17;

if (hour < 8 || hour > 16) {
    console.log("Kancelarija je zatvorena!");
}

console.log("Logical AND (&&)");
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

console.log("Logical NOT (!)");
console.log(!true);

console.log("Logical operator precedence: NOT (!), AND (&&), OR (||");