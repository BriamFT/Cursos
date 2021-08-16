'use strict'
// BUCLES / CICLOS
// Un bucle es una estructura de control que se repite varias veces (definido o indefinido)

// Bucle FOR
console.log("Bucle for");
var numero = 10;

for(let i = 0; i <= numero; i++) {
    console.log("Número: " + i);

    // debugger; Sirve para compilar el ciclo y poder observar lo que se ejecuta paso a paso en el bucle
}


// Bucle WHILE 
console.log("Bucle while");
var year = 2018;

while(year != 1990) {
    //Ejecuta las siguientes instrucciones
    console.log("Año: " + year);

    if(year == 2000) {
        break; // Esta función sirve para para el ciclo (iteración) de los bucles
    }
    year--;
}


// Bucle DO WHILE
console.log("Bucle do while");
var years = 30;

do {
    //alert("Solo cuando sea diferente de 20");
    console.log(years);
    years--;
} while(years >= 25)