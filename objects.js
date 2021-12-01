'use strict';

// ---- Code goes below this line ----

let user1 = new Object();
let user2 = {};

let user = {
    name: "Rajak",
    email: "skolarajak.qa@gmail.com",
    city: "Novi Sad",
    zip: 21000,
    active: true,
};

user.nema = false;
user.zip = 21101;

console.log(user.email);
console.log(user.zip);
console.log(user.nema);
delete user.nema;
console.log(user.nema);

if (user.nema === undefined) {
    console.log("Kljuc 'nema' ne postoji");
}

if ("name" in user) {
    console.log("Kljuc 'name' postoji");    
}
console.log("Objects: for...in loop")
for (let key in user) {
    console.log(key, user[key]);
}

console.log("Objects: sorting")
let pozivniBrojevi = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    "381": "Serbia",
    "1": "USA",
}

for (let key in pozivniBrojevi) {
    console.log(pozivniBrojevi[key]);
}

let message = "Hello";
let phrase = message;

let pozivni = pozivniBrojevi;

pozivni["381"] = "Srbija";

for (let key in pozivni) {
    console.log("pozivniBrojevi:" , pozivniBrojevi[key]);
    console.log("pozivni:", pozivni[key]);
}

console.log("Objects: comparison")

let objA = {};
let objB = objA;

console.log("objA == objB", objA == objB);
console.log("objA === objB", objA === objB);

let objC = {};
let objD = {};

console.log("objC == objD", objC == objD);
console.log("objC === objD", objC === objD);


console.log("Objects: cloning")
let clone = {};

// Kloniranje objekta, nacin 1
for (let key in pozivniBrojevi) {
    clone[key] = pozivniBrojevi[key];
}

clone['381'] = "Serbia";

for (let key in clone) {
    console.log("pozivniBrojevi=" , pozivniBrojevi[key], "-", clone[key], '=clone');
}

// Kloniranje objekta, nacin 2
let clone2 = Object.assign({}, pozivniBrojevi);

for (let key in clone2) {
    console.log("pozivniBrojevi=" , pozivniBrojevi[key], "-", clone2[key], '=clone2');
}

user.sayHi = function() {
    console.log("Hi!");
};

user.sayHi();

let newUser = {
    name: "New user",
    sayHi: function() {
        console.log("Hiiii!!!");
    },
    sayHello() {
        console.log("Helloooo", this.name);
    }
}

newUser.sayHi();
newUser.sayHello();

let newUserClone = Object.assign({}, newUser);

newUserClone.name = "New User Clone";
newUserClone.sayHello();