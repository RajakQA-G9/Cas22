'use strict';

let arr1 = new Array();
let arr2 = [];

let fruits = ["Apple", "Orange", "Plum", "Watermelon"];

fruits[2] = "Pear";
fruits[4] = "Lemon";

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

fruits.push("Pear");
fruits.push("Apple");
fruits.push("Pear");

console.log(fruits.length)
console.log(fruits.pop())
console.log(fruits.length)
console.log(fruits.shift());
console.log(fruits.length)

let vegetables = ["Cabbage", "Onion"];

vegetables.push("Garlic", "Potato");
vegetables.unshift("Carrot", "Leek");

for(let i = 0; i < vegetables.length; i++) {
    console.log(i +". " + vegetables[i]);
}

vegetables.splice(2, 1); // Preferiran nacin brisanja elementa niza

delete vegetables[2]; // Ostavlja rupu u nizu nakon brisanja

for(let i = 0; i < vegetables.length; i++) {
    console.log(i +". " + vegetables[i]);
}

console.log(vegetables);

console.log(fruits.slice(1,3));

let newArray = vegetables.concat(fruits);

console.log(newArray);

console.log(newArray.indexOf("Pear"));

newArray.splice(newArray.indexOf("Pear"),1);
console.log(newArray);

let stupid = ["Stupid", "Stupid", "Stupid", "Stupid", "Stupid", "Stupid", "Stupid", "Stupid", ];

console.log(stupid);