'use-strict'

// DOM - Document Object Model
function cambiaColor(color) {
    caja.style.background = color;
}

//Conseguir elementos con un ID concreto 
//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

caja.innerHTML = "¡Texto en la caja de JS!";
caja.style.background = "black  "
caja.style.padding = "20px";
caja.style.color = "white";

caja.className = "clase1 clas2"

//Conseguir elementos por su etiqueta
const todosLosDivs = document.getElementsByTagName('div');
var contenidoEnTexto = todosLosDivs[2];
console.log(contenidoEnTexto.textContent);
contenidoEnTexto.innerHTML = "Otro texto para el segundo div";
contenidoEnTexto.style.background = "green";

console.log(todosLosDivs);
const section = document.querySelector('#miseccion')
for(let valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement('p');
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        var hr = document.createElement('hr');  
        parrafo.appendChild(texto);   
        section.append(parrafo);    
    }
}
section.append(hr);

// Conseguir elementos por su clase
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');

divsAmarillos[0].style.background = 'yellow';
for(let div in divsRojos){
    if(divsRojos[div].className == 'rojo')
        divsRojos[div].style.background = 'red';
}
    
console.log(divsRojos);


console.log(caja);

// Query Selector    
var id = document.querySelector("#encabezado");
console.log(id);
var claseRojo = document.querySelectorAll(".rojo");
console.log(claseRojo);

