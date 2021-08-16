// Obtener el elemento con valor mayor en el arreglo dado

// Opción convencional
const arrayTest = [9,0,3,14,5,6,72];
const mayor = (array) => {
    let numero = array[0];
    array.forEach(element => {
        if(element>numero)
            numero = element;
    });
    return numero;
}

console.log(mayor(arrayTest));

// Opción "reduce"
// Reduce recibe más parametros, para definir el acumulador y el elemento. Pero si no definimos estos valores, ete los asigna con el primer
// y segundo valor del arreglo respectivamente
const getBiggest = (array) => array.reduce((accumulator,element) => accumulator>element ? accumulator : element);
console.log(getBiggest(arrayTest));


// Realizar una función que elimine de un arreglo los elementos que sean Undefined, false, 0 y los null. Con una sola iteración
const clean = (array) => array.reduce((accumulator,element) => {
    if(element){
        accumulator.push(element);
    }
    return accumulator
}, []);

const c = clean([1, undefined, null, 0, 2, 3]);
console.log(c);


// Hacer una función que permita aplanar un arreglo a 1 nivel 
const arr = [[1,2], [[3,4]],[1,[]]];
 //[1,2,[3,4],1,[]]

const flatten = (array) => array.reduce((accumulator,element) => accumulator.concat(element),[]);
const d = flatten(arr);
console.log(d);