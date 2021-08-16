'use strict'

// BOM Browser Object Model

console.log("------------ BOM ------------");
console.log("Alto de la pantalla: "+window.innerHeight);
console.log("Ancho de la pantalla: "+window.innerWidth);
    //Lo mismo sería con:
    // screen.width;
    // screen.height;

console.log(window.location);

function redirect(url){
    window.location.href = url;
}

function abrirVentana(url){
    window.open(url,"","width=400,height=300");
}
    