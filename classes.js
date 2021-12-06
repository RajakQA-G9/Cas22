'use strict';

class Person {

    constructor(name) {
        this.name = name;
    }
    
    printName() {
        console.log(`Moje ime je ${this.name}`);
    }

}

class User extends Person {

    login() {
        console.log(`Login ${this.name}`)
    }

    printName() {
        console.log(`Moje ime je ${this.name}. Ja sam korisnik`);
    }

}

let klijent = new User("Petar");

klijent.printName();
klijent.login();

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} is standing still.`)
    }
}

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} is hiding.`);
    }
}

let bunny = new Rabbit("Sima");

bunny.run(5);
bunny.hide();

let parrot = new Animal("Krcko");
parrot.run(4);
parrot.stop();

class Korisnik {
    _name = "NN";

    constructor() {
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 3) {
            console.log("Ime je prekratko.");
            return;
        }
        this._name = value;
    }
}

let korisnik = new Korisnik();
console.log(korisnik.name);

korisnik.name = "fff";

console.log(korisnik.name);
console.log(korisnik._name);