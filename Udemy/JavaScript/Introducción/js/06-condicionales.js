'use strict'

// Condicional IF

/* 
  Operadores relacionales:
    mayor              >
    menor              <
    mayor o igual      >=
    menor o igual      <=
    igual              ==
    distinto           != 
*/


var edad = 50;
var nombre = "Briam Flores";

if (edad >= 18) {
    console.log(nombre + " tiene " + edad + " años, es MAYOR de edad");

    if(edad <= 33) {
        console.log("Todavía eres Milenial");
    } else if(edad >= 70) {
        console.log("Eres anciano");
    } else {
        console.log("Ya no eres Milenial");
    }

} else {
    console.log(nombre + " tiene " + edad + " años, es MENOR de edad");
}

// Aplicación de operadores lógicos

/*
Operadores lógicos
    AND     (Y)     &&
    OR      (O)     ||
    NOT     (NO)    !
*/

// Negación - NOT
var year = 2028;
if(year != 2016) {
    console.log("No es 2016, el año actual es: " + year);
}

// Conjunción - AND
if(year >= 200 && year <= 2020){
    console.log("Estamos en la era actual");
} else {
    console.log("Estamos en la era post moderna");
}

// Disyunción - OR
if(year == 2008 || (year >= 2018 && year == 2028)) {
    console.log("El año acaba el 8");
} else {
    console.log("Año no registrado");
}