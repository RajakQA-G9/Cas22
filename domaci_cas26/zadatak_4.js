'use strict'

class Product {
    _name = "";
    _code = "";
    _unit = "";
    _quantity = "";
    _price = "";
    _stock = 0;

    constructor(name, code) {
        this.name = name;
        this.code = code;
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    set code(value) {
        this._code = value;
    }

    get code() {
        return this._code;
    }

    set unit(value) {
        this._unit = value;
    }

    get unit() {
        return this._unit;
    }

    set quantity(value) {
        this._quantity = value;
    }

    get quantity() {
        return this._quantity;
    }

    set price(value) {
        this._price = value;
    }

    get price() {
        return this._price;
    }

    set stock(value) {
        this._stock = value;
    }

    get stock() {
        return this._stock;
    }

    sell(quantity = 1) {
        this._stock -= quantity; // Isto sto i: this._stock = this._stock - quantity;
    }

    restock(quantity = 1) {
        this._stock += quantity; // Isto sto i: this._stock = this._stock + quantity;
    }
}

class Milk extends Product {
    _fat = 0;

    constructor(name, code, fat) {
        super(name, code);
        this.unit = "L";
        this.quantity = 1;
        this.price = 100;
        this.stock = 500;
        this.fat = fat;
    }

    set fat(value) {
        this._fat = value;
    }

    get fat() {
        return this._fat;
    }
}

class Bread extends Product {
    _type = "";

    constructor(name, code, type) {
        super(name, code);
        this.unit = "g";
        this.quantity = 500;
        this.price = 50;
        this.stock = 250;
        this.type = type;
    }

    set type(value) {
        this._type = value;
    }

    get type() {
        return this._type;
    }
}

let mleko = new Milk("Alpsko", "198643245", 3.5);
let hleb = new Bread("Psenicni Beli", "198326492", "T-500");

console.log("*** Pocetno stanje ***");
console.log(`Mleko ${mleko.name} ${mleko.fat}% (${mleko.price}RSD / ${mleko.quantity}${mleko.unit}) na zalihama ${mleko.stock} kom`);
console.log(`Hleb ${hleb.name} ${hleb.type} (${hleb.price}RSD / ${hleb.quantity}${hleb.unit}) na zalihama ${hleb.stock} kom`);

mleko.sell(10);
hleb.sell(45);

console.log("*** Nakon prodaje ***");
console.log(`Mleko ${mleko.name} ${mleko.fat}% (${mleko.price}RSD / ${mleko.quantity}${mleko.unit}) na zalihama ${mleko.stock} kom`);
console.log(`Hleb ${hleb.name} ${hleb.type} (${hleb.price}RSD / ${hleb.quantity}${hleb.unit}) na zalihama ${hleb.stock} kom`);

mleko.restock(50);
hleb.restock(72);

console.log("*** Nakon prijema robe ***");
console.log(`Mleko ${mleko.name} ${mleko.fat}% (${mleko.price}RSD / ${mleko.quantity}${mleko.unit}) na zalihama ${mleko.stock} kom`);
console.log(`Hleb ${hleb.name} ${hleb.type} (${hleb.price}RSD / ${hleb.quantity}${hleb.unit}) na zalihama ${hleb.stock} kom`);