"use strict"

let year = 2020;

if (year === 2021) {
    console.log("It's 2021!");
}

if (year === 2021) {
    console.log("It's 2021!");
} else {
    console.log("It's NOT 2021!");
}

if (year > 2020) {
    console.log("It's after 2020!");
} else if (year < 2020) {
    console.log("It's before 2020!");
} else if (year == 2020) {
    console.log("It's 2020!");
}

let canDrive;
let age = 16;

if (age >= 16) {
    canDrive = true;
} else {
    canDrive = false;
}

// let result = (uslov) ? vrednost1 : vrednost2
let canDrive2 = (age >= 16) ? true : false;

console.log("canDrive =", canDrive);
console.log("canDrive2 =", canDrive2);