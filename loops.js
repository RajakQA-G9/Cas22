"use strict";

console.log("Loops: while");
let c = 5
while (c < 5) {
    console.log(c);
    c++;
}
console.log("Gotovo");

console.log("Loops: do .. while");
c = 5;
do {
    console.log(c);
    c++;
} while(c < 5);
console.log("Gotovo");

console.log("Loops: for");
let i = 0;
for (i = 0; i < 5; i++) {
    console.log(i);
}
console.log("Gotovo", i);

console.log("Loops: break");
let num = 0;
while(true) {
    if (num > 10) {
        break;
    }

    num++;
}
console.log("Num = " + num);

console.log("Loops: continue");
for(i = 0; i < 10; i++) {
    if (i % 2 != 0) {
        continue;
    }

    console.log(i);
}
console.log("Gotovo");

let loop = true;
let counter = 0;

while(loop) {
    counter++;
    if (counter > 100) {
        loop = false;
    }
}
console.log("Done. counter = " + counter);

for (let j = 0; j < 10; j++) {
    
}