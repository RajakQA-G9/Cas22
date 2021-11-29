'use strict';

function addNumbers(number1, number2) {
    return Number(number1) + Number(number2);
}

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

function noReturn() {
    let i = 1;
    return;
}


function callOtherFunctions() {
    let rezultat = addNumbers(2, 3);
    console.log(rezultat);
    console.log(checkAge(20));
    console.log(checkAge(16));
    console.log(noReturn());
}

callOtherFunctions();

