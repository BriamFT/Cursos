'use strict'

// Funciones anonimas
// Es una función que no tiene un nombre.

var pelicula = function(nombre) {
    return "La película es: " + nombre;
}

// Call back
// Es una función que se ejecuta dentro de otra.

function sumando(numero1, numero2, suma_muestra, sumaX2){
    var sumar = numero1 + numero2;

    suma_muestra(sumar);
    sumaX2(sumar);

    return sumar;
}

sumando(2,3, function(dato){
    console.log("La suma es: " + dato);
},
function(dato) {
    console.log("La suma por dos es: " + (dato*2));
}
);

//funciones de FLECHA
// Tomando el ejemplo anterior, las funciones de flecha sería de la siguiente manera.
console.log("FUNCIONES DE FLECHA");
sumando(9,15, (dato) => {
    console.log("La suma es: " + dato);
},
dato => {  // Incluso solo se puede dejar el parametro, sin poner "( )". En caso de ser más de 1 parametro, si requiere de estos. 
    console.log("La suma por dos es: " + (dato*2));
});