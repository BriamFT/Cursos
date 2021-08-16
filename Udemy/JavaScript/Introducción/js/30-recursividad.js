'use strict'

// RECURSIVIDAD 
// Es una función que se llama a si misma una y otra vez hasta que se cumpla la condición base

const conteoRegresivo = (a) => {
    if(a < 0) return
    console.log(a)
    return conteoRegresivo(a - 1)
}

console.log(conteoRegresivo(10))
