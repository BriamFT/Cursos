'use strict'

var texto = "Hola mundo, soy una variable global";
var numero = 11;

function holaMundo(texto){
    var txt = "Texto dentro de la función"; // Variable de ambito local

    console.log(texto);
    console.log(numero.toString()); // Variable de ambito global, por ello es posible utilizarla.
    console.log(txt); 
}

holaMundo(texto);

// console.log(txt); //No es posible utlizarla, porque no esta definida en el ambito global.   