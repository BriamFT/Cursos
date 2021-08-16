'use strict'


// Parametros REST y SPREAD


// REST
function listadoFrutas(fruta1, fruta2, ...frutas) {
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);

    console.log(frutas);
}

listadoFrutas("Manzana","Sandia","Naranja", "Melón", "Coco");


// SPREAD

var frutillas = ["Manzana", "Sandia"];
listadoFrutas( ...frutillas, "Uva", "Pera", "Naranja");