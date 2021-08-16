'use strict'

// Switch
var edad = 25;
var imprimir = "";

switch(edad){
    case 18:
        imprimir = "Acabas de cumplir la mayoria de edad";
    break;
    case 25:
        imprimir = "Ya eres un adulto";
    break;
    case 40:
        imprimir = "Crisis de los cuarenta";
    break;
    case 75: 
        imprimir = "Eres ya un anciano";
    break;
    default:
        imprimir = "Tu edad es neutra";
    break;
}

console.log(imprimir);