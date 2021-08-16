'use strict'
// LocalStorage

//Comprobando disponibilidad del LocalStorage
if(typeof(Storage)!=undefined)
    console.log("LocalStorage disponible");
else
    console.log("Navegador incompatible con LocalStorage");


// Guardando datos (Existen dos maneras)
localStorage.setItem("dato1","Hola, soy un dato almacenado en el localStorage");
localStorage.dato2 = "Hola, yo soy otro dato almacenado en el mismo localStorage";

//Recuperando datos
const dato =  localStorage.getItem("dato1");

// Eliminar datos
localStorage.removeItem("dato");

// Limpiando datos del LocalStorage
localStorage.clear();

//Guardando objetos
//var usuario = 

// Esta parte del código cuenta cuantas veces has recargado la página web.
var numTimes = localStorage.getItem("visits-Hlfma");
if(numTimes == null) {
  numTimes = 0;
} else {
  numTimes = parseInt(numTimes, 10);
}
numTimes++;
localStorage.setItem("visits-Hlfma", (numTimes).toString(10))
document.getElementById("visit-times").textContent = numTimes.toString(10);