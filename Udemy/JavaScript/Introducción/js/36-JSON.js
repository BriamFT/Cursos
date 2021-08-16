'use strict'

//JSON Javascript Object Notation
// Permite crear objetos de manera sencilla mendiante arrays asociativos

// Creando un objeto JSON con algunos parámetros
var movie = {
    title: 'The Avengers',
    year: '2018',
    country: 'Estados Unidos'
};

movie.title = "Star Wars VIII"

var movies = [
    {title: "Iron Man", year: 2008, country: "México"},
    movie
];

let divMovies = document.querySelector("#movies");
for (const key in movies) {
    let parrafo = document.createElement("p");
    parrafo.append(movies[key].title);
    divMovies.appendChild(parrafo);
}


console.log(movies);

