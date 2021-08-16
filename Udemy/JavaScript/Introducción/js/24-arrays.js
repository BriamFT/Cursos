'use strict'

// Arrays - Arreglos - Matrices

var nombre = "Briam Flores";
var nombres = ["Briam Flores", "Byron Flores", "Alejandro Flores", "Patricia Torres", 4, true];

var lenguajes = new Array("JS", "PHP", "GO", "PHYTON", "JAVA", "MySQL");

var elemento = parseInt(prompt("Elige un elemento del array: \n1.JS\n2.PHP\n3.GO\n4.PHYTON", 0));
if(elemento > lenguajes.length){
    alert(`Introduce un número correcto. (Número <= ${lenguajes.length} )`);
} else {
    alert(`Lenguaje elegido: ${lenguajes[elemento-1]}`);
}

console.log(nombres);
console.log(lenguajes);

console.log(nombres[0]);


// Array - Longitud
console.log(nombres.length);

document.write("<h2>Lenguajes de programación del 2019</h2>");
document.write("<ul>");
for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>" + lenguajes[i] + "</li>");
}
document.write("</ul>");


// For each
document.write("Función forEach </br>");
lenguajes.forEach((elemento, indice, array)=>{
    console.log(array);
    document.write(indice + " - " + elemento + "</br>");
});

// For in
document.write("Función for in </br>");
for(let lenguaje in lenguajes){
    document.write(lenguajes[lenguaje] + "</br>");
}


// Busquedas dentro de un array
var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "PHP";
});

    // Lo mismo que la sección de código anterior, pero más simplificado
    var busqueda2 = lenguajes.find(lenguaje => lenguaje == "JAVA7");

    //Busqueda del indice
    var busqueda3 = lenguajes.findIndex(lenguaje => lenguaje == "JAVA");

    // Busqueda de una condición en concreta, para saber si algún elemento la cumple
    var precios = [15, 9, 50, 90, 75, 11];
    var busqueda4 = precios.some(precio => precio < 5);

console.log(busqueda);
console.log(busqueda2);
console.log(busqueda3);
console.log(busqueda4);