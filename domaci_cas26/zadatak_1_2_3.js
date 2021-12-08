'use strict'
// 1
let proizvodjaci = ["President", "Mutti", "Barilla"];

proizvodjaci.unshift("Dukat");
proizvodjaci.push("Monini", "Rio Mare");

// 2
for(let i = 0; i < proizvodjaci.length; i++) {
    console.log(proizvodjaci[i]);
}

// 3
function obrisiIzNiza(vrednost) {
    let index = proizvodjaci.indexOf(vrednost);

    if (index > -1) {
        proizvodjaci.splice(index,1);
    }
}

obrisiIzNiza("Presidenttt");

console.log(proizvodjaci);