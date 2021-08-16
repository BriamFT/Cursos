'use strict'

// Plantillas de texto

var nombre = prompt("Ingresa tu nombre");
var apellidos = prompt("Ingresa tus apellidos");
var correo = prompt("Ingresa tu correo");

// var texto = "Mi nombre es: " +nombre+ "<br>Mis apellidos son: " +apellidos;
var texto = `
    <h2> Hola! Que tal? <h2>
    <h3> Mi nombre es: ${nombre}</h3>
    <h3> Mis apellidos son: ${apellidos}</h3>
    <h3> Mi correo es: ${correo}</h3>
`
document.write(texto);