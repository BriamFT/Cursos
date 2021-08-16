'use strict'

// Pruebas con let y var en Variables

// Variables var (Prueba)
var numero = 40;
console.log(numero); // Valor 40

if (true) {
    var numero = 50;
    console.log(numero); // Valor 50
}

console.log(numero); // Valor 50

// Variables let (Prueba)
// let funciona para que las variables solo funcionen a nivel de bloque de código.
var texto = "Curso JS ITSM - Briam";
console.log(texto);

if (true) {
    let texto = "Hola mundo";
    console.log(texto);
}

console.log(texto);