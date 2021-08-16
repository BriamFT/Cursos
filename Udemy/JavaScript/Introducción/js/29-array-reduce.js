'use strict'
// Reduce
// Es una función que permite ejecutar funciones reducer
// Recibe dos argumentos: 1. Valor que esta siendo acumulado 2. Elemento que se esta iterando del arreglo
// Finalmente retorna el nuevo elemento que se va acumulando

const reducido = [1,2].reduce((acumulador, elemento) => acumulador + elemento, 0) // El 0 es el valor inicial del acumulador
console.log(reducido);

const numeros = [1, 2, 3, 4, 5];

// Función de suma total (Ejemplo de una mala practica de una función de este tipo)
const suma = (ns) => {
    let acumulado = 0;
    for (let i = 0; i < ns.length; i++) {
        acumulado += ns[i];
    }
    return acumulado;
}
console.log("Suma con for: " + suma(numeros));

// Una forma más limpia y elegante de hacer una suma
const resultado = numeros.reduce((total,elemento) => total + elemento, 0);
console.log("Suma con reduce: " + resultado);


// Esta función tambien sirve para indexar los elementos se encuentran en un arreglo
const mascotas = [
    { nombre: 'Puchini', edad: 12, tipo: 'perro'},
    { nombre: 'Chanchito', edad: 3, tipo: 'perro'},
    { nombre: 'Pelusa', edad: 10, tipo: 'gato'},
    { nombre: 'Simbita', edad: 2, tipo: 'gato'},
];

const indexed = mascotas.reduce((acumulador, elemento) => ({  // Se esta creando una variable con el arreglo indexado por nombre (se esta retornando un objeto)    
    ...acumulador, //El objeto a retornar es una copia del acumulador
    [elemento.nombre]: elemento,  //Agrega una llave, para indexar el elemento con el nombre de la mascota + todo el elemento (objeto)
}) , {})

console.log(indexed);

// Para despues buscar uno de los elementos, ahora será más facil con el objeto indexado
console.log(indexed['Simbita']); // Esto se convierte en una alternativa más eficiente en ciertos casos que con la función FIND



const anidado = [1, [2, 3], 4, [5]];
// [1, 2, 3, 4, 5]
const plano = anidado.reduce((acumulador, elemento) => acumulador.concat(elemento),[]);
console.log(plano);